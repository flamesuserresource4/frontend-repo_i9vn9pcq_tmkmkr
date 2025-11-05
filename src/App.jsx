import React from 'react';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import BlogPreview from './components/BlogPreview';
import ContactForm from './components/ContactForm';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-20 w-full bg-white/70 backdrop-blur border-b border-slate-200/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-emerald-500" />
            <span className="text-sm font-semibold tracking-tight">PastelPay</span>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-slate-700 sm:flex">
            <a href="#pricing" className="hover:text-emerald-600">Pricing</a>
            <a href="#blog" className="hover:text-emerald-600">Blog</a>
            <a href="#contact" className="hover:text-emerald-600">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 sm:inline-flex">
              Sign in
            </button>
            <button className="rounded-lg bg-emerald-500 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600">
              Create account
            </button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Pricing />
        <BlogPreview />
        <ContactForm />
      </main>

      <footer className="border-t border-slate-200/60 bg-white py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500">© {new Date().getFullYear()} PastelPay, Inc. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <a href="#" className="hover:text-slate-700">Privacy</a>
              <a href="#" className="hover:text-slate-700">Terms</a>
              <a href="#" className="hover:text-slate-700">Status</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
