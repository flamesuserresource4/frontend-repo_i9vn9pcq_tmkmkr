import React from 'react';

const posts = [
  {
    id: 1,
    title: 'Designing calm fintech experiences with pastels',
    excerpt: 'How a softer palette can increase trust and reduce cognitive load in payment flows.',
    tag: 'Design',
    date: 'Oct 2025',
  },
  {
    id: 2,
    title: 'Subscriptions that scale without complexity',
    excerpt: 'A practical guide to implementing recurring billing and proration the easy way.',
    tag: 'Growth',
    date: 'Sep 2025',
  },
  {
    id: 3,
    title: 'Reducing fraud while keeping checkout smooth',
    excerpt: 'Balance security and simplicity using risk signals and progressive checks.',
    tag: 'Security',
    date: 'Aug 2025',
  },
];

export default function BlogPreview() {
  return (
    <section id="blog" className="relative w-full bg-gradient-to-b from-white to-indigo-50/40 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">From the blog</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Insights on product, growth, and secure commerce — written by our team.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="inline-flex items-center gap-2 text-xs">
                <span className="rounded-full bg-rose-100 px-2 py-0.5 font-medium text-rose-700">{post.tag}</span>
                <span className="text-slate-500">{post.date}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-emerald-600">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
              <a href="#" className="mt-4 inline-block text-sm font-semibold text-emerald-600">
                Read more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
