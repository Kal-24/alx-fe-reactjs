import axios from 'axios';

export const fetchUserData = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  const headers = {};

  const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await axios.get(url, { headers });
  return response.data;
};
