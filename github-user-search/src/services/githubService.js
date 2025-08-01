import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const fetchUserData = async (formData, page = 1) => {
  const { username, location, repos } = formData;

  // Build the query string for GitHub API
  let query = '';
  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (repos) query += `repos:>=${repos} `;
  query = query.trim();

  const perPage = 30;
  const url = `${BASE_URL}?q=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`;

  const response = await axios.get(url);

  // Fetch more details for each user (location, repos count)
  const users = await Promise.all(
    response.data.items.map(async (user) => {
      try {
        const userDetails = await axios.get(user.url);
        return {
          ...user,
          location: userDetails.data.location,
          public_repos: userDetails.data.public_repos,
        };
      } catch {
        return user;
      }
    })
  );

  return { users, totalCount: response.data.total_count };
};
