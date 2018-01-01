import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';
import { makeSelectForumSlug, makeSelectTopicSlug } from 'containers/App/selectors';
import {
  LOAD_POSTS,
  SEARCH_POSTS,
  CHANGE_PAGE,
} from './constants';
import { makeSelectQuery, makeSelectPage } from './selectors';
import { loadPostSuccess, loadPostError } from './actions';

function* loadPosts() {
  const forumSlug = yield (select(makeSelectForumSlug()));
  const topicSlug = yield (select(makeSelectTopicSlug()));
  const query = yield (select(makeSelectQuery()));
  const page = yield (select(makeSelectPage()));
  const requestURL = `http://localhost:3000/api/forums/${forumSlug}/topics/${topicSlug}/posts/all?q=${query || ''}&page=${page}`;
  try {
    const posts = yield call(request, requestURL);
    yield put(loadPostSuccess(posts));
  } catch (err) {
    yield put(loadPostError(err));
  }
}

// Individual exports for testing
export default function* postData() {
  yield takeLatest(LOAD_POSTS, loadPosts);
  yield takeLatest(SEARCH_POSTS, loadPosts);
  yield takeLatest(CHANGE_PAGE, loadPosts);
}
