import localforage from 'localforage';

const CURRENT_USER_TOKEN_KEY = 'currentUserToken';
const CURRENT_USER_KEY = 'currentUserKey';

export const setCurrentUser = (currentUser) =>
  localforage.setItem(CURRENT_USER_KEY, currentUser);

export const getCurrentUser = () =>
  localforage.getItem(CURRENT_USER_KEY);

export const setCurrentUserToken = (token) =>
  localforage.setItem(CURRENT_USER_TOKEN_KEY, token);

export const getCurrentUserToken = () =>
  localforage.getItem(CURRENT_USER_TOKEN_KEY);
