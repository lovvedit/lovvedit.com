const tokenName = 'authToken';

export const isAuthenticated = () => !!localStorage.getItem(tokenName);

export const getAuthToken = () => localStorage.getItem(tokenName);

export const setAuthToken = token => localStorage.setItem(tokenName, token);

export const removeAuthToken = () => localStorage.removeItem(tokenName);
