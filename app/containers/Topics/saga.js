import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';
import {
  LOAD_TOPICS,
  SEARCH_TOPICS,
  CHANGE_PAGE,
} from './constants';
import { makeSelectForumSlug, makeSelectQuery, makeSelectPage } from './selectors';
import { loadTopicSuccess, loadTopicError } from './actions';

function* loadTopics() {
  const forumSlug = yield (select(makeSelectForumSlug()));
  const query = yield (select(makeSelectQuery()));
  const page = yield (select(makeSelectPage()));
  const requestURL = `http://localhost:3000/api/forums/${forumSlug}/topics/all?q=${query || ''}&page=${page}`;
  try {
    const topics = yield call(request, requestURL);
    yield put(loadTopicSuccess(topics));
  } catch (err) {
    yield put(loadTopicError(err));
  }
}

// Individual exports for testing
export default function* topicData() {
  yield takeLatest(LOAD_TOPICS, loadTopics);
  yield takeLatest(SEARCH_TOPICS, loadTopics);
  yield takeLatest(CHANGE_PAGE, loadTopics);
}
