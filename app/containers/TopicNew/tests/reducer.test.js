
import { fromJS } from 'immutable';
import topicNewReducer from '../reducer';

describe('topicNewReducer', () => {
  it('returns the initial state', () => {
    expect(topicNewReducer(undefined, {})).toEqual(fromJS({}));
  });
});
