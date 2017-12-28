import { createSelector } from 'reselect';

/**
 * Direct selector to the topics state domain
 */
const selectTopicsDomain = (state) => state.get('topics');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Topics
 */

const makeSelectTopics = () => createSelector(
  selectTopicsDomain,
  (substate) => substate.get('topics')
);

const makeSelectForumSlug = () => createSelector(
  selectTopicsDomain,
  (substate) => substate.get('forumSlug')
);

const makeSelectLoading = () => createSelector(
  selectTopicsDomain,
  (substate) => substate.get('loading')
);

const makeSelectError = () => createSelector(
  selectTopicsDomain,
  (substate) => substate.get('error')
);

export {
  selectTopicsDomain,
  makeSelectTopics,
  makeSelectForumSlug,
  makeSelectLoading,
  makeSelectError,
};
