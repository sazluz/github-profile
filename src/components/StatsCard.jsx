import { BookOpen, Star, Trophy } from "lucide-react";


const StatsCard = ({ user, repos }) => {

  const totalStars = repos.reduce(
    (total, repo) => total + repo.stargazers_count,
    0
  );


  const mostStarredRepo = repos.length
    ? [...repos].sort(
        (a, b) => b.stargazers_count - a.stargazers_count
      )[0]
    : null;


  const stats = [
    {
      title: "Repositories",
      value: user.public_repos,
      icon: BookOpen,
      color: "text-emerald-400",
    },
    {
      title: "Total Stars",
      value: totalStars,
      icon: Star,
      color: "text-yellow-400",
    },
    {
      title: "Top Repository",
      value: mostStarredRepo
        ? mostStarredRepo.name
        : "N/A",
      icon: Trophy,
      color: "text-purple-400",
    },
  ];


  return (
    <div className="grid gap-5 md:grid-cols-3">

      {stats.map((stat) => {

        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
          >

            <Icon className={`h-6 w-6 ${stat.color}`} />


            <p className="mt-5 text-sm text-slate-400">
              {stat.title}
            </p>


            <h3 className="mt-2 truncate text-2xl font-semibold text-white">
              {stat.value}
            </h3>


          </div>
        );

      })}

    </div>
  );
};


export default StatsCard;