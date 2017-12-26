import { createSelector } from 'reselect';

/**
 * Direct selector to the signUpForm state domain
 */
const selectSignUpFormDomain = (state) => state.get('signUpForm');

/**
 * Other specific selectors
 */

const makeSelectSignUpForm = () => createSelector(
  selectSignUpFormDomain,
  (substate) => substate.toJS()
);

const makeSelectParams = () => createSelector(
  selectSignUpFormDomain,
  (signUpState) => signUpState.get('params')
);

const makeSelectError = () => createSelector(
  selectSignUpFormDomain,
  (signUpState) => signUpState.get('error')
);

const makeSelectLoading = () => createSelector(
  selectSignUpFormDomain,
  (signUpState) => signUpState.get('loading')
);

export {
  makeSelectLoading,
  selectSignUpFormDomain,
  makeSelectSignUpForm,
  makeSelectParams,
  makeSelectError,
};
