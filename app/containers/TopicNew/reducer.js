/*
 *
 * TopicNew reducer
 *
 */

import { fromJS } from 'immutable';
import {
  TOPIC_NEW_CREATE,
  TOPIC_NEW_SUCCESS,
  TOPIC_NEW_ERROR,
  TOPIC_NEW_UNMOUNT,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  success: false,
  params: {
    title: '',
    description: '',
  },
});

function topicNewReducer(state = initialState, action) {
  switch (action.type) {
    case TOPIC_NEW_CREATE:
      return state
        .set('loading', true)
        .set('error', false)
        .set('params', action.params);
    case TOPIC_NEW_SUCCESS:
      return state
        .set('loading', false)
        .set('success', true)
        .set('error', false)
        .set('params', {
          title: '',
          description: '',
        });
    case TOPIC_NEW_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    case TOPIC_NEW_UNMOUNT:
      return initialState;
    default:
      return state;
  }
}

export default topicNewReducer;
