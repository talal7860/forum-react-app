/**
 *
 * Topics
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import PostDetail from 'components/PostDetail';
import AlertError from 'components/AlertError';
import { makeSelectTopics, makeSelectLoading, makeSelectError } from './selectors';
import { loadTopics, unloadTopics } from './actions';
import reducer from './reducer';
import saga from './saga';

export class Topics extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.onLoad(this.props.forumSlug);
  }

  componentWillUnmount() {
    this.props.onUnLoad();
  }

  render() {
    const {
      props: {
        topics,
        loading,
        error,
      },
    } = this;
    return (
      <div>
        { loading ? 'Loading...' : null }
        <AlertError error={error} />
        { topics ? topics.data.map((topic) => (
          <PostDetail key={`topic-${topic.slug}`} post={topic} />
        )) : null }
      </div>
    );
  }
}

Topics.propTypes = {
  onLoad: PropTypes.func.isRequired,
  onUnLoad: PropTypes.func.isRequired,
  topics: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  loading: PropTypes.bool,
  forumSlug: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  topics: makeSelectTopics(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoad: (forumSlug) => dispatch(loadTopics(forumSlug)),
    onUnLoad: () => dispatch(unloadTopics()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'topics', reducer });
const withSaga = injectSaga({ key: 'topics', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Topics);
