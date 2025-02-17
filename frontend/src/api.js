import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getTeams = async () => {
    const response = await axios.get(`${API_URL}/teams`);
    return response.data;
};

export const getMatches = async () => {
    const response = await axios.get(`${API_URL}/matches`);
    return response.data;
};
