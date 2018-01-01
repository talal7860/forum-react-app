/*
 *
 * Posts reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_POSTS,
  CHANGE_PAGE,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
  LOAD_POSTS_UNLOAD,
  SEARCH_POSTS,
} from './constants';

const initialState = fromJS({
  posts: false,
  error: false,
  loading: false,
  q: false,
  page: 1,
});

function postsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return state
        .set('loading', true)
        .set('error', false);
    case CHANGE_PAGE:
      return state
        .set('loading', true)
        .set('error', false)
        .set('page', action.page);
    case SEARCH_POSTS:
      return state
        .set('page', 1)
        .set('loading', true)
        .set('error', false)
        .set('q', action.q);
    case LOAD_POSTS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('posts', action.posts);
    case LOAD_POSTS_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error)
        .set('posts', false);
    case LOAD_POSTS_UNLOAD:
      return initialState;
    default:
      return state;
  }
}

export default postsReducer;
