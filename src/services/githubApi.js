const API_URL = "https://api.github.com";

export const getUser = async (username) => {
  const response = await fetch(
    `${API_URL}/users/${username}`
  );

  if (!response.ok) {
    throw new Error("User not found");
  }

  return response.json();
};


export const getRepos = async (username) => {

  let page = 1;
  let repos = [];

  while (true) {

    const response = await fetch(
      `${API_URL}/users/${username}/repos?per_page=100&page=${page}&sort=updated`
    );

    if (!response.ok) {
      throw new Error("Repositories not found");
    }

    const data = await response.json();

    repos = [...repos, ...data];
    
    if (data.length < 100) {
      break;
    }

    page++;
  }

  return repos;
};