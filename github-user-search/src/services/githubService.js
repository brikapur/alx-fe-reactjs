import axios from "axios";

const SEARCH_API_URL = "https://api.github.com/search/users";
const USER_API_URL = "https://api.github.com/users";

/**
 * Advanced GitHub user search
 */
export const fetchUserData = async ({
  username,
  location,
  minRepos,
  page = 1,
}) => {
  let query = username;

  if (location) {
    query += ` location:${location}`;
  }

  if (minRepos) {
    query += ` repos:>${minRepos}`;
  }

  const response = await axios.get(SEARCH_API_URL, {
    params: {
      q: query,
      page,
      per_page: 10,
    },
    headers: {
      Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
    },
  });

  return response.data;
};

/**
 * Fetch single user details (location, repos count, etc.)
 */
export const fetchUserDetails = async (username) => {
  const response = await axios.get(`${USER_API_URL}/${username}`, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
    },
  });

  return response.data;
};
