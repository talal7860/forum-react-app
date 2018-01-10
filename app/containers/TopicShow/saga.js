import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';

import { loading, loaded } from 'containers/App/actions';
import { makeSelectForumSlug, makeSelectTopicSlug } from 'containers/App/selectors';
import {
  LOAD_TOPIC,
} from './constants';
import { loadTopicSuccess, loadTopicError } from './actions';

function* loadTopic() {
  const forumSlug = yield (select(makeSelectForumSlug()));
  const topicSlug = yield (select(makeSelectTopicSlug()));
  const requestURL = `http://localhost:3000/api/forums/${forumSlug}/topics/${topicSlug}`;
  yield put(loading());
  try {
    const topic = yield call(request, requestURL);
    yield put(loadTopicSuccess(topic));
  } catch (err) {
    yield put(loadTopicError(err));
  } finally {
    yield put(loaded());
  }
}

// Individual exports for testing
export default function* topicData() {
  yield takeLatest(LOAD_TOPIC, loadTopic);
}
