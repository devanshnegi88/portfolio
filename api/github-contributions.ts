// Serverless endpoint that scrapes GitHub contributions SVG and returns total contributions for the past year.
// This keeps your personal token out of the client; deploy on Vercel/Netlify/any serverless host.

export default async function handler(req: any, res: any) {
  try {
    const username = (req.query?.username || req.body?.username || '').toString();
    if (!username) {
      res.status(400).json({ error: 'Missing username' });
      return;
    }

    const resp = await fetch(`https://github.com/users/${encodeURIComponent(username)}/contributions`);
    if (!resp.ok) {
      res.status(502).json({ error: 'Failed to fetch GitHub contributions' });
      return;
    }

    const text = await resp.text();

    // Look for patterns like "1,234 contributions" or "1 contribution"
    const match = text.match(/([0-9,]+)\s+contribution/mi);
    if (!match) {
      // Fallback: return zero if parsing fails
      res.status(200).json({ contributions: 0 });
      return;
    }

    const raw = match[1].replace(/,/g, '');
    const contributions = parseInt(raw || '0', 10) || 0;

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=60');
    res.status(200).json({ contributions });
  } catch (err: any) {
    res.status(500).json({ error: err?.message || 'Server error' });
  }
}
