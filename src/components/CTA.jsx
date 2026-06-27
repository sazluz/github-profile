import React from 'react'

const CTA = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        <div className="rounded-3xl border border-slate-800 bg-slate-900 px-6 py-16 text-center shadow-xl sm:px-12">

          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Ready to analyze a GitHub profile?
          </h2>


          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Explore repositories, programming languages, and developer
            insights with a simple GitHub username search.
          </p>


          <button
            className="mt-8 rounded-xl bg-emerald-600 px-8 py-3 font-medium text-white transition-all hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95"
          >
            Analyze a Profile
          </button>

        </div>

      </div>
    </section>
  );
};

export default CTA;