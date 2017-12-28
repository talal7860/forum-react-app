
import { fromJS } from 'immutable';
import topicsReducer from '../reducer';

describe('topicsReducer', () => {
  it('returns the initial state', () => {
    expect(topicsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
