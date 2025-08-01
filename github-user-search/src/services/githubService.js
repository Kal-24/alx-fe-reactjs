import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/search/users';

export async function fetchUserData({ username, location, repos }) {
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (repos) query += ` repos:>=${repos}`;

  if (!query.trim()) return [];

  try {
    const response = await axios.get(GITHUB_API_URL, {
      params: {
        q: query,
        per_page: 30,
      },
    });

    const users = response.data.items;

    // Fetch extra details like location and repos count for each user
    // Because the search API doesn't return location/repos count,
    // we need to fetch each user's details individually.

    const detailedUsers = await Promise.all(users.map(async (user) => {
      const userDetailsResp = await axios.get(user.url);
      return {
        ...user,
        location: userDetailsResp.data.location,
        public_repos: userDetailsResp.data.public_repos,
      };
    }));

    return detailedUsers;
  } catch (error) {
    console.error('GitHub API error:', error);
    throw error;
  }
}
