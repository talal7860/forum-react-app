import { createSelector } from 'reselect';

/**
 * Direct selector to the topicNew state domain
 */
const selectTopicNewDomain = (state) => state.get('topicNew');

/**
 * Other specific selectors
 */


const makeSelectTopicNewParams = () => createSelector(
  selectTopicNewDomain,
  (substate) => substate.get('params')
);

const makeSelectTopicNewError = () => createSelector(
  selectTopicNewDomain,
  (substate) => substate.get('error')
);

const makeSelectTopicNewSuccess = () => createSelector(
  selectTopicNewDomain,
  (substate) => substate.get('success')
);

const makeSelectTopicNewLoading = () => createSelector(
  selectTopicNewDomain,
  (substate) => substate.get('loading')
);

export {
  selectTopicNewDomain,
  makeSelectTopicNewParams,
  makeSelectTopicNewLoading,
  makeSelectTopicNewSuccess,
  makeSelectTopicNewError,
};
