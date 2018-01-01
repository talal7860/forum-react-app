/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { nth } from 'lodash/fp';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const makeSelectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentUser')
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectForums = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('forums')
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const makeSelectGetSelectedForumSlug = () => createSelector(
  selectRoute,
  (routeState) => {
    const location = routeState.get('location').toJS();
    return nth(2, location.pathname.split('/')) || false;
  }
);

const makeSelectTopicSlug = () => createSelector(
  selectRoute,
  (routeState) => {
    const location = routeState.get('location').toJS();
    return nth(4, location.pathname.split('/')) || false;
  }
);

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectForums,
  makeSelectLocation,
  makeSelectGetSelectedForumSlug,
  makeSelectGetSelectedForumSlug as makeSelectForumSlug,
  makeSelectTopicSlug,
};
