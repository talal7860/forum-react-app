/*
 *
 * TopicShow actions
 *
 */

import {
  LOAD_TOPIC,
  LOAD_TOPIC_SUCCESS,
  LOAD_TOPIC_ERROR,
  UNLOAD_TOPIC,
} from './constants';

export function loadTopic(topicSlug) {
  return {
    type: LOAD_TOPIC,
    topicSlug,
  };
}

export function loadTopicSuccess(topic) {
  return {
    type: LOAD_TOPIC_SUCCESS,
    topic,
  };
}

export function loadTopicError(error) {
  return {
    type: LOAD_TOPIC_ERROR,
    error,
  };
}

export function unloadTopic() {
  return {
    type: UNLOAD_TOPIC,
  };
}
