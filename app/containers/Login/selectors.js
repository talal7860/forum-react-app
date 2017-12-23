import { createSelector } from 'reselect';

/**
 * Direct selector to the login state domain
 */
const selectLoginDomain = (state) => state.get('login');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Login
 */

const makeSelectLogin = () => createSelector(
  selectLoginDomain,
  (substate) => substate.toJS()
);

const makeSelectUserData = () => createSelector(
  selectLoginDomain,
  (loginState) => loginState.get('user')
);

const makeSelectParams = () => createSelector(
  selectLoginDomain,
  (loginState) => loginState.get('params')
);

const makeSelectError = () => createSelector(
  selectLoginDomain,
  (loginState) => loginState.get('error')
);

export {
  makeSelectLogin,
  selectLoginDomain,
  makeSelectUserData,
  makeSelectParams,
  makeSelectError,
};
