/*
 *
 * Topics reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_TOPICS,
  LOAD_TOPICS_SUCCESS,
  LOAD_TOPICS_ERROR,
  LOAD_TOPICS_UNLOAD,
} from './constants';

const initialState = fromJS({
  topics: false,
  error: false,
  forumSlug: false,
  loading: false,
});

function topicsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TOPICS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('forumSlug', action.forumSlug);
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
