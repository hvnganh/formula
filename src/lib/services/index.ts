import { API_URL } from '@/lib/constants';

export const getAllTeam = async () => {
    const response = await fetch(`${API_URL}/teams`);
    return response.json();
};

export const getAllDriver = async () => {
    const response = await fetch(`${API_URL}/drivers`);
    return response.json();
};

export const getTeamDetail = async (teamName: string) => {
    const response = await fetch(`${API_URL}/team/${teamName}`);
    return response.json();
};

export const getDriverDetail = async (driverName: string) => {
    const response = await fetch(`${API_URL}/driver/${driverName}`);
    return response.json();
};

export const getResultByYear = async (year: string) => {
    const response = await fetch(`${API_URL}/result/${year}`);
    return response.json();
};
