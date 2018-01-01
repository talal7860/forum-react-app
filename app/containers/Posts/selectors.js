import { createSelector } from 'reselect';

/**
 * Direct selector to the posts state domain
 */
const selectPostsDomain = (state) => state.get('posts');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Posts
 */

const makeSelectPosts = () => createSelector(
  selectPostsDomain,
  (substate) => substate.get('posts')
);

const makeSelectQuery = () => createSelector(
  selectPostsDomain,
  (substate) => substate.get('q')
);

const makeSelectPage = () => createSelector(
  selectPostsDomain,
  (substate) => substate.get('page')
);

const makeSelectLoading = () => createSelector(
  selectPostsDomain,
  (substate) => substate.get('loading')
);

const makeSelectError = () => createSelector(
  selectPostsDomain,
  (substate) => substate.get('error')
);

export {
  selectPostsDomain,
  makeSelectPosts,
  makeSelectLoading,
  makeSelectError,
  makeSelectQuery,
  makeSelectPage,
};
