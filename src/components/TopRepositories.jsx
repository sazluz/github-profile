import { Star, GitFork, ExternalLink } from "lucide-react";
import { 
  SiJavascript,
  SiTypescript,
  SiPython
} from "react-icons/si";

const TopRepositories = ({ repos }) => {
  const topRepos = [...repos]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 5);

    const languageIcons = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
};

    const LanguageIcon = ({ language }) => {

  const Icon = languageIcons[language];

  if (!Icon) return null;

  return (
    <Icon className="text-lg text-emerald-400" />
  );
};

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">
          Top Repositories
        </h2>

        <span className="text-sm text-slate-400">
          Top 5 by Stars
        </span>
      </div>

      {topRepos.length === 0 ? (
        <p className="text-slate-400">
          No public repositories found.
        </p>
      ) : (
        <div className="space-y-4">
          {topRepos.map((repo) => (
            <a
              href={repo.html_url}
              target="_blank"
              key={repo.id}
              className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 p-4 transition hover:border-emerald-500"
            >
              {/* Repository Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-white">
                    {repo.name}
                  </h3>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-emerald-400"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                {repo.description && (
                  <p className="mt-2 text-sm text-slate-400">
                    {repo.description}
                  </p>
                )}

                <span className="text-xs text-slate-500">
  Updated {new Date(repo.updated_at).toLocaleDateString()}
</span>

{repo.private ? (
  <span className="rounded-full bg-red-500/20 px-2 py-1 text-xs text-red-400">
    Private
  </span>
) : (
  <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs text-emerald-400">
    Public
  </span>
)}

                <div className="mt-3 flex items-center gap-5 text-sm text-slate-400">
                  {repo.language && (
                   <div className="flex items-center gap-2">
  {/* <LanguageIcon language={repo.language}/> */}
  <span>{repo.language}</span>
</div>
                  )}

                  <span className="flex items-center gap-1">
                    <Star size={15} />
                    {repo.stargazers_count}
                  </span>

                  <span className="flex items-center gap-1">
                    <GitFork size={15} />
                    {repo.forks_count}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopRepositories;