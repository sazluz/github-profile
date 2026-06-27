export function generateInsights(user, repos) {
  const insights = [];

  const totalStars = repos.reduce(
    (sum, repo) => sum + repo.stargazers_count,
    0
  );


  const languages = new Set();

  repos.forEach((repo) => {
    if (repo.language) {
      languages.add(repo.language);
    }
  });


  if (repos.length >= 20) {
    insights.push({
      type: "active",
      title: "Active Developer",
      description: `Created ${repos.length} public repositories.`
    });
  }


  if (totalStars >= 100) {
    insights.push({
      type: "stars",
      title: "Popular Projects",
      description: `${totalStars} total stars across repositories.`
    });
  }


  if (languages.size >= 4) {
    insights.push({
      type: "languages",
      title: "Polyglot Programmer",
      description: `Uses ${languages.size} programming languages.`
    });
  }


  if (insights.length === 0) {
    insights.push({
      type: "growth",
      title: "Growing Developer",
      description: "Keep building more projects."
    });
  }


  return insights.slice(0,5);
}