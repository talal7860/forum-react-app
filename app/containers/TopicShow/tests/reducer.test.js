
import { fromJS } from 'immutable';
import topicShowReducer from '../reducer';

describe('topicShowReducer', () => {
  it('returns the initial state', () => {
    expect(topicShowReducer(undefined, {})).toEqual(fromJS({}));
  });
});
