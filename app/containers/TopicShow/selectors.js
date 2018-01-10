import { createSelector } from 'reselect';

/**
 * Direct selector to the topicShow state domain
 */
const selectTopicShowDomain = (state) => state.get('topicShow');

/**
 * Other specific selectors
 */

const makeSelectTopic = () => createSelector(
  selectTopicShowDomain,
  (substate) => substate.get('topic')
);

const makeSelectTopicSlug = () => createSelector(
  selectTopicShowDomain,
  (substate) => substate.get('topicSlug')
);

const makeSelectError = () => createSelector(
  selectTopicShowDomain,
  (substate) => substate.get('error')
);

export {
  selectTopicShowDomain,
  makeSelectTopic,
  makeSelectTopicSlug,
  makeSelectError,
};
