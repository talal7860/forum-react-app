import { call, put, select, takeLatest } from 'redux-saga/effects';

import { TOPIC_NEW_CREATE } from 'containers/TopicNew/constants';
import { topicNewSuccess, topicNewError } from 'containers/TopicNew/actions';
import { makeSelectGetSelectedForumSlug } from 'containers/App/selectors';
import { postRequest } from 'utils/request';
import { makeSelectTopicNewParams } from 'containers/TopicNew/selectors';

export function* postTopicNew() {
  const { title, description } = yield select(makeSelectTopicNewParams());
  const forumSlug = yield (select(makeSelectGetSelectedForumSlug()));
  const requestURL = `http://localhost:3000/api/forums/${forumSlug}/topics`;

  try {
    const data = { title, description };
    const topic = yield call(postRequest, requestURL, data);
    yield put(topicNewSuccess(topic));
  } catch (err) {
    yield put(topicNewError(err.message));
  }
}

export default function* topicNewData() {
  yield takeLatest(TOPIC_NEW_CREATE, postTopicNew);
}
