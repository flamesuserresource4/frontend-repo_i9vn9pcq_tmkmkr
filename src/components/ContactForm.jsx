import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // No backend call yet; simulate async send
      await new Promise((r) => setTimeout(r, 900));
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative w-full bg-white py-20">
      <div className="absolute inset-0 bg-gradient-to-t from-teal-50/70 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">Contact us</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Have questions about pricing, integrations, or security? Send a message and we’ll get back within 1 business day.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 grid gap-4 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-slate-700">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              placeholder="Taylor Swift"
            />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              placeholder="you@company.com"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              required
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              placeholder="Tell us what you’re building…"
            />
          </div>

          <div className="sm:col-span-2 flex items-center justify-between gap-3">
            <p className="text-sm text-slate-500">We’ll never share your info. Unsubscribe anytime.</p>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600 disabled:opacity-60"
            >
              {status === 'loading' ? 'Sending…' : 'Send message'}
            </button>
          </div>

          {status === 'success' && (
            <div className="sm:col-span-2 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-700">
              Thanks! We received your message and will get back soon.
            </div>
          )}
          {status === 'error' && (
            <div className="sm:col-span-2 rounded-lg bg-rose-50 p-3 text-sm text-rose-700">
              Something went wrong. Please try again.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
