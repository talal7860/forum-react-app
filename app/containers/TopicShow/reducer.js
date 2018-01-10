/*
 *
 * TopicShow reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_TOPIC,
  LOAD_TOPIC_SUCCESS,
  LOAD_TOPIC_ERROR,
  UNLOAD_TOPIC,
} from './constants';

const initialState = fromJS({
  topic: false,
  error: false,
  topicSlug: false,
});

function topicShowReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TOPIC:
      return state;
    case LOAD_TOPIC_SUCCESS:
      return state
        .set('topic', action.topic);
    case LOAD_TOPIC_ERROR:
      return state
        .set('error', action.error);
    case UNLOAD_TOPIC:
      return initialState;
    default:
      return state;
  }
}

export default topicShowReducer;
