/*
 *
 * Posts actions
 *
 */

import {
  LOAD_POSTS,
  CHANGE_PAGE,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
  LOAD_POSTS_UNLOAD,
  SEARCH_POSTS,
} from './constants';

export function loadPosts(forumSlug, topicSlug) {
  return {
    type: LOAD_POSTS,
    forumSlug,
    topicSlug,
  };
}

export function changePage(page) {
  return {
    type: CHANGE_PAGE,
    page,
  };
}

export function searchPosts(q) {
  return {
    type: SEARCH_POSTS,
    q,
  };
}

export function loadPostSuccess(posts) {
  return {
    type: LOAD_POSTS_SUCCESS,
    posts,
  };
}

export function loadPostError(error) {
  return {
    type: LOAD_POSTS_ERROR,
    error,
  };
}

export function unloadPosts() {
  return {
    type: LOAD_POSTS_UNLOAD,
  };
}
