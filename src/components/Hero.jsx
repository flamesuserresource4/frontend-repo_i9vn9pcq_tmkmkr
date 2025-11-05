import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-b from-rose-50 via-indigo-50 to-teal-50">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/80" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-3 py-1 shadow-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-xs font-medium text-slate-600">Pastel fintech vibes</span>
        </div>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-800 sm:text-6xl">
          A calm, modern platform for digital commerce
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
          Grow your business with simple payments, subscriptions, and customer tools — crafted in soft pastels for a serene, focused experience.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#pricing"
            className="rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
          >
            Get Started
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200/70 backdrop-blur transition hover:bg-white"
          >
            Talk to us
          </a>
        </div>
        <p className="mt-4 text-xs text-slate-500">No credit card required • Cancel anytime</p>
      </div>
    </section>
  );
}
