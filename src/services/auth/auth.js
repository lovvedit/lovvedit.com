import { always } from 'ramda';

const tokenName = 'authToken';

/**
 * Returns true if the user is authenticated, false otherwise.
 */
export const isAuthenticated = always(!!localStorage.getItem(tokenName));

/**
 * Returns the user authentication token.
 */
export const getAuthToken = always(localStorage.getItem(tokenName));

/**
 * Sets the user authentication token in localStorage.
 */
export const setAuthToken = token => localStorage.setItem(tokenName, token);

/**
 * Removes the user authentication token from localStorage.
 */
export const removeAuthToken = always(localStorage.removeItem(tokenName));
