import { GitBranch, Star, Code2, Lightbulb } from "lucide-react";

const DashboardPreview = () => {
  return (
    <section className="border-b border-slate-800 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            See GitHub Insights in Action
          </h2>

          <p className="mt-4 text-lg text-slate-400">
            Get a complete overview of repositories, languages, and developer
            activity in one clean dashboard.
          </p>
        </div>


        {/* Dashboard Preview */}
        <div className="mx-auto mt-16 max-w-5xl rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl sm:p-8">

          {/* Profile Header */}
          <div className="flex flex-col gap-5 border-b border-slate-800 pb-6 sm:flex-row sm:items-center">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-800 text-3xl">
              <img src="https://avatars.githubusercontent.com/u/104188060?v=4" />
            </div>


            <div>
              <h3 className="text-xl font-semibold text-white">
                Salahadin Admasu
              </h3>

              <p className="text-slate-400">
                @sazluz
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Building modern web applications with JavaScript and TypeScript.
              </p>
            </div>

          </div>



          {/* Stats */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
              <GitBranch className="h-6 w-6 text-emerald-400" />

              <p className="mt-4 text-sm text-slate-400">
                Repositories
              </p>

              <p className="mt-1 text-3xl font-semibold text-white">
                53
              </p>
            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
              <Star className="h-6 w-6 text-yellow-400" />

              <p className="mt-4 text-sm text-slate-400">
                Total Stars
              </p>

              <p className="mt-1 text-3xl font-semibold text-white">
                356
              </p>
            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
              <Code2 className="h-6 w-6 text-blue-400" />

              <p className="mt-4 text-sm text-slate-400">
                Languages
              </p>

              <p className="mt-1 text-3xl font-semibold text-white">
                6
              </p>
            </div>

          </div>



          {/* Bottom Grid */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">


            {/* Language Chart Preview */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-white">
                  Language Breakdown
                </h4>

                <Code2 className="h-5 w-5 text-blue-400" />
              </div>


              <div className="mt-6 space-y-4">

                {[
                  ["JavaScript", "60%", "bg-yellow-400"],
                  ["TypeScript", "25%", "bg-blue-400"],
                  ["Python", "15%", "bg-emerald-400"],
                ].map(([name, percent, color]) => (
                  <div key={name}>

                    <div className="mb-2 flex justify-between text-sm">
                      <span className="text-slate-300">
                        {name}
                      </span>

                      <span className="text-slate-400">
                        {percent}
                      </span>
                    </div>

                    <div className="h-2 rounded-full bg-slate-800">
                      <div
                        className={`h-2 rounded-full ${color}`}
                        style={{ width: percent }}
                      />
                    </div>

                  </div>
                ))}

              </div>

            </div>



            {/* Insights */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

              <div className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-emerald-400" />

                <h4 className="font-semibold text-white">
                  Developer Insights
                </h4>
              </div>


              <div className="mt-6 space-y-3">

                {[
                  "Active developer",
                  "Popular repositories",
                  "Polyglot programmer",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-300"
                  >
                    ✓ {item}
                  </div>
                ))}

              </div>

            </div>


          </div>

        </div>

      </div>
    </section>
  );
};

export default DashboardPreview;