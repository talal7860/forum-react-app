/*
 *
 * Topics reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_TOPICS,
  CHANGE_PAGE,
  LOAD_TOPICS_SUCCESS,
  LOAD_TOPICS_ERROR,
  LOAD_TOPICS_UNLOAD,
  SEARCH_TOPICS,
} from './constants';

const initialState = fromJS({
  topics: false,
  error: false,
  forumSlug: false,
  loading: false,
  q: false,
  page: 1,
});

function topicsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TOPICS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('forumSlug', action.forumSlug);
    case CHANGE_PAGE:
      return state
        .set('loading', true)
        .set('error', false)
        .set('page', action.page);
    case SEARCH_TOPICS:
      return state
        .set('page', 1)
        .set('loading', true)
        .set('error', false)
        .set('q', action.q);
    case LOAD_TOPICS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('topics', action.topics);
    case LOAD_TOPICS_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error)
        .set('topics', false);
    case LOAD_TOPICS_UNLOAD:
      return initialState;
    default:
      return state;
  }
}

export default topicsReducer;
