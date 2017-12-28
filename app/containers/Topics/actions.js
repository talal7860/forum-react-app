/*
 *
 * Topics actions
 *
 */

import {
  LOAD_TOPICS,
  LOAD_TOPICS_SUCCESS,
  LOAD_TOPICS_ERROR,
  LOAD_TOPICS_UNLOAD,
} from './constants';

export function loadTopics(forumSlug) {
  return {
    type: LOAD_TOPICS,
    forumSlug,
  };
}

export function loadTopicSuccess(topics) {
  return {
    type: LOAD_TOPICS_SUCCESS,
    topics,
  };
}

export function loadTopicError(error) {
  return {
    type: LOAD_TOPICS_ERROR,
    error,
  };
}

export function unloadTopics() {
  return {
    type: LOAD_TOPICS_UNLOAD,
  };
}

