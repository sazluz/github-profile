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
  const response = await fetch(
    `${API_URL}/users/${username}/repos`
  );

  if (!response.ok) {
    throw new Error("Repositories not found");
  }

  return response.json();
};