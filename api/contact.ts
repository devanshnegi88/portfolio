// Vercel-compatible serverless function using Nodemailer to send contact messages.
// Required environment variables:
// - SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
// Optional:
// - SMTP_SECURE ("true"/"false"), SENDER_EMAIL, RECEIVER_EMAIL

import nodemailer from nodemailer;

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { name, email, message } = req.body || {};
    if (!name || !email || !message) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const SMTP_SECURE = process.env.SMTP_SECURE === 'true';

    const SENDER_EMAIL = process.env.SENDER_EMAIL || SMTP_USER || '';
    const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL || 'devanshnegi88@gmail.com';

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      res.status(500).json({ error: 'Missing SMTP configuration. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS.' });
      return;
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE || SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const mail = {
      from: SENDER_EMAIL,
      to: RECEIVER_EMAIL,
      subject: `New message from portfolio: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      replyTo: email,
    };

    await transporter.sendMail(mail);

    res.status(200).json({ ok: true });
  } catch (err: any) {
    res.status(500).json({ error: err?.message || 'Server error' });
  }
}
