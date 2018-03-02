import axios from 'axios';

export const FETCH_GOALS = 'fetch_goals';

const API_URL = 'http://localhost:3001/api/v1';

export function fetchGoals() {
  const request = axios.get(`${API_URL}/goals/`);
  return {
    type: FETCH_GOALS,
    payload: request
  };
};
