// src/services/githubAPI.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com/users/';

export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}` || undefined
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    throw error;
  }
};
