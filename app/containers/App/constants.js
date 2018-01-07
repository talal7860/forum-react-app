/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_FORUMS = 'boilerplate/App/LOAD_FORUMS';
export const LOAD_FORUMS_SUCCESS = 'boilerplate/App/LOAD_FORUMS_SUCCESS';
export const SET_SESSION = 'boilerplate/App/SET_SESSION';
export const RESTORE_SESSION = 'boilerplate/App/RESTORE_SESSION';
export const LOAD_FORUMS_ERROR = 'boilerplate/App/LOAD_FORUMS_ERROR';
export const SESSION_LOADED = 'boilerplate/App/SESSION_LOADED';
export const SESSION_DESTROY = 'boilerplate/App/SESSION_DESTROY';
export const LOADING = 'boilerplate/App/LOADING';
export const LOADED = 'boilerplate/App/LOADED';
export const DEFAULT_LOCALE = 'en';
