import http from 'http';
import nodemailer from 'nodemailer';

const PORT = process.env.LOCAL_API_PORT ? Number(process.env.LOCAL_API_PORT) : 5174;

function jsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', () => {
      try {
        resolve(JSON.parse(body || '{}'));
      } catch (err) {
        reject(err);
      }
    });
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    res.end();
    return;
  }

  if (req.url === '/api/contact' && req.method === 'POST') {
    try {
      const body = await jsonBody(req);
      const { name, email, message } = body || {};
      if (!name || !email || !message) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Missing required fields' }));
        return;
      }

      const SMTP_HOST = process.env.SMTP_HOST;
      const SMTP_PORT = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
      const SMTP_USER = process.env.SMTP_USER;
      const SMTP_PASS = process.env.SMTP_PASS;
      const SMTP_SECURE = process.env.SMTP_SECURE === 'true';

      const SENDER_EMAIL = process.env.SENDER_EMAIL || SMTP_USER || 'no-reply@example.com';
      const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL || 'devanshnegi88@gmail.com';

      if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Missing SMTP configuration. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS.' }));
        return;
      }

      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_SECURE || SMTP_PORT === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      });

      const mail = {
        from: SENDER_EMAIL,
        to: RECEIVER_EMAIL,
        subject: `New message from portfolio: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        replyTo: email,
      };

      await transporter.sendMail(mail);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true }));
    } catch (err) {
      console.error('contact error', err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: err?.message || 'Server error' }));
    }
    return;
  }

  if (req.url?.startsWith('/api/github-contributions') && req.method === 'GET') {
    try {
      const urlObj = new URL(req.url, `http://localhost:${PORT}`);
      const username = urlObj.searchParams.get('username') || '';
      if (!username) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Missing username' }));
        return;
      }
      const ghRes = await fetch(
        `https://github.com/users/${encodeURIComponent(username)}/contributions`
      );
      if (!ghRes.ok) {
        res.writeHead(502, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Failed to fetch GitHub contributions' }));
        return;
      }
      const text = await ghRes.text();
      const match = text.match(/([0-9,]+)\s+contribution/mi);
      const contributions = match ? parseInt(match[1].replace(/,/g, ''), 10) || 0 : 0;
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ contributions }));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: err?.message || 'Server error' }));
    }
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(PORT, () => {
  console.log(`Local API server listening on http://localhost:${PORT}`);
});
