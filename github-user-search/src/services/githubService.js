import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/search/users?q';

export async function searchUsers({ username, location, minRepos }) {
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  if (!query.trim()) return [];

  try {
    const response = await axios.get(GITHUB_API_URL + query, {
      params: {
        per_page: 30,
      },
    });

    const users = response.data.items;

    // Fetch extra details for each user
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
