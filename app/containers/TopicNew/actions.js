/*
 *
 * TopicNew actions
 *
 */

import {
  TOPIC_NEW_CREATE,
  TOPIC_NEW_SUCCESS,
  TOPIC_NEW_ERROR,
  TOPIC_NEW_UNMOUNT,
} from './constants';

export function topicNewCreate(params) {
  return {
    type: TOPIC_NEW_CREATE,
    params,
  };
}

export function topicNewSuccess() {
  return {
    type: TOPIC_NEW_SUCCESS,
  };
}

export function topicNewError(error) {
  return {
    type: TOPIC_NEW_ERROR,
    error,
  };
}

export function topicNewUnmount() {
  return {
    type: TOPIC_NEW_UNMOUNT,
  };
}
