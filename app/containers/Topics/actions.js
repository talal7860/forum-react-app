/*
 *
 * Topics actions
 *
 */

import {
  LOAD_TOPICS,
  CHANGE_PAGE,
  LOAD_TOPICS_SUCCESS,
  LOAD_TOPICS_ERROR,
  LOAD_TOPICS_UNLOAD,
  SEARCH_TOPICS,
} from './constants';

export function loadTopics(forumSlug) {
  return {
    type: LOAD_TOPICS,
    forumSlug,
  };
}

export function changePage(page) {
  return {
    type: CHANGE_PAGE,
    page,
  };
}

export function searchTopics(q) {
  return {
    type: SEARCH_TOPICS,
    q,
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

