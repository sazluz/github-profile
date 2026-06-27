export function generateInsights(user, repos) {
  const insights = [];

  // Total stars
  const totalStars = repos.reduce(
    (sum, repo) => sum + repo.stargazers_count,
    0
  );

  // Total forks
  const totalForks = repos.reduce(
    (sum, repo) => sum + repo.forks_count,
    0
  );

  // Count languages
  const languages = new Set();

  repos.forEach((repo) => {
    if (repo.language) {
      languages.add(repo.language);
    }
  });

  // Active developer
  if (repos.length >= 20) {
    insights.push({
      title: "🚀 Active Developer",
      description: `Owns ${repos.length} public repositories.`,
    });
  }

  // Popular repositories
  if (totalStars >= 100) {
    insights.push({
      title: "⭐ Popular Projects",
      description: `${totalStars} total stars received.`,
    });
  }

  // Polyglot programmer
  if (languages.size >= 4) {
    insights.push({
      title: "🌍 Polyglot Programmer",
      description: `Uses ${languages.size} programming languages.`,
    });
  }

  // Community contributor
  if (totalForks >= 50) {
    insights.push({
      title: "🤝 Community Contributor",
      description: `${totalForks} total forks across repositories.`,
    });
  }

  // New developer
  if (repos.length < 5) {
    insights.push({
      title: "🌱 Growing Portfolio",
      description: "Building a collection of public projects.",
    });
  }

  if (insights.length === 0) {
    insights.push({
      title: "📈 Getting Started",
      description: "Keep building projects to unlock more insights.",
    });
  }

  return insights.slice(0, 5);
}