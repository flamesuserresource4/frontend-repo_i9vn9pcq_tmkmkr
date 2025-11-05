import React from 'react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'For personal projects and early experiments',
    features: ['Basic analytics', 'Community support', '1 project', 'Email receipts'],
    highlight: false,
    cta: 'Start free',
  },
  {
    name: 'Growth',
    price: '$19/mo',
    description: 'Best for indie hackers and small teams',
    features: ['All Starter features', 'Priority support', 'Subscriptions', 'Custom domains'],
    highlight: true,
    cta: 'Upgrade',
  },
  {
    name: 'Scale',
    price: '$99/mo',
    description: 'Advanced controls for high-volume brands',
    features: ['All Growth features', 'SLA & SSO', 'Advanced fraud tools', 'Dedicated manager'],
    highlight: false,
    cta: 'Contact sales',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full bg-white py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-50/60 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">Simple, honest pricing</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Choose a plan that grows with your business. Transparent tiers with pastel accents.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={
                'relative rounded-2xl border p-6 shadow-sm backdrop-blur ' +
                (tier.highlight
                  ? 'border-emerald-200 bg-emerald-50'
                  : 'border-slate-200 bg-white/80')
              }
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-slate-800">{tier.name}</h3>
              <p className="mt-1 text-3xl font-bold text-slate-900">{tier.price}</p>
              <p className="mt-1 text-sm text-slate-600">{tier.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={
                  'mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition ' +
                  (tier.highlight
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                    : 'bg-white text-slate-800 ring-1 ring-slate-200 hover:bg-slate-50')
                }
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
