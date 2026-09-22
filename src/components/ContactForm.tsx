import React, { useState } from 'react';

type Props = {
  contactEmail?: string | null;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm({ contactEmail }: Props) {
  const recipient = contactEmail || (import.meta.env.VITE_CONTACT_EMAIL as string) || '';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const valid = () => {
    if (!name.trim()) {
      setError('Please enter your name.');
      return false;
    }
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setError('Please enter a valid email address.');
      return false;
    }
    if (!subject.trim()) {
      setError('Please enter a subject.');
      return false;
    }
    if (!message.trim()) {
      setError('Please enter a message.');
      return false;
    }
    return true;
  };

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    if (!valid()) return;
    if (!recipient) {
      setError('Recipient email not configured. Set VITE_CONTACT_EMAIL in your environment.');
      return;
    }

    // honeypot check client-side (bots may fill)
    if (honeypot.trim()) {
      setStatus('success');
      return; // silently succeed for bots
    }

    setStatus('sending');

    try {
      const url = `https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`;
      const form = new FormData();
      form.append('name', name.trim());
      form.append('email', email.trim());
      form.append('subject', subject.trim());
      form.append('message', message.trim());
      form.append('_subject', `Website contact: ${subject.trim()}`);
      form.append('_captcha', 'false');
      // honeypot field name _honey is supported by FormSubmit
      form.append('_honey', honeypot);

      const res = await fetch(url, {
        method: 'POST',
        body: form,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.message || `Submission failed: ${res.status}`);
      }

      setStatus('success');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setHoneypot('');
    } catch (err: any) {
      console.error('Contact submit error', err);
      setError(err?.message || 'Submission failed');
      setStatus('error');
    }
  }

  return (
    <div className="h-full flex flex-col">
      <label className="text-xs text-slate-500">Name</label>
      <input
        className="w-full p-3 mt-1 rounded-lg bg-[#0f0f12] border border-white/6 text-sm"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
      />

      <label className="text-xs text-slate-500 mt-2 block">Email</label>
      <input
        className="w-full p-3 mt-1 rounded-lg bg-[#0f0f12] border border-white/6 text-sm"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@domain.com"
        type="email"
      />

      <label className="text-xs text-slate-500 mt-2 block">Subject</label>
      <input
        className="w-full p-3 mt-1 rounded-lg bg-[#0f0f12] border border-white/6 text-sm"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Subject"
      />

      <label className="text-xs text-slate-500 mt-2 block">Message</label>
      <textarea
        className="w-full p-3 mt-1 rounded-lg bg-[#0f0f12] border border-white/6 text-sm min-h-[6rem] resize-none flex-1"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write a short message..."
      />

      {/* Honeypot field for spam protection (visually hidden) */}
      <div style={{ display: 'none' }} aria-hidden>
        <label>Do not fill this</label>
        <input
          name="_honey"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          autoComplete="off"
        />
      </div>

      <div className="flex items-center gap-3 mt-auto">
        <button
          type="button"
          onClick={(e) => handleSubmit(e as any)}
          className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>
        {status === 'success' && <p className="text-sm text-emerald-400">Message sent — thank you!</p>}
        {status === 'error' && <p className="text-sm text-rose-400">{error}</p>}
      </div>

      {error && status !== 'error' && <p className="text-sm text-rose-400 mt-2">{error}</p>}
    </div>
  );
}
