import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';
import {
  LOAD_TOPICS,
} from './constants';
import { makeSelectForumSlug } from './selectors';
import { loadTopicSuccess, loadTopicError } from './actions';

function* loadTopics() {
  const forumSlug = yield (select(makeSelectForumSlug()));
  const requestURL = `http://localhost:3000/api/forums/${forumSlug}/topics/all`;
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
}
