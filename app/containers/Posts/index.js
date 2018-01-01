/**
 *
 * Posts
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Alert } from 'reactstrap';
import { isEmpty } from 'lodash/fp';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import PostDetail from 'components/PostDetail';
import AlertError from 'components/AlertError';
import Pagination from 'components/Pagination';
import { makeSelectGetSelectedForumSlug as makeSelectForumSlug, makeSelectTopicSlug } from 'containers/App/selectors';
import { makeSelectPosts, makeSelectLoading, makeSelectError } from './selectors';
import { loadPosts, unloadPosts, changePage } from './actions';
import reducer from './reducer';
import saga from './saga';

export class Posts extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.onPageChange = this.onPageChange.bind(this);
  }

  componentDidMount() {
    this.props.onLoad(this.props.forumSlug);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.forumSlug !== nextProps.forumSlug) {
      this.props.onLoad(this.props.forumSlug);
    }
  }

  componentWillUnmount() {
    this.props.onUnLoad();
  }

  onPageChange(page) {
    this.props.changePage(page);
  }

  render() {
    const {
      props: {
        posts,
        loading,
        error,
        topicSlug,
      },
      onPageChange,
    } = this;

    return (
      <div>
        { loading ? <Alert color="warning">Loading...</Alert> : null }
        {topicSlug}
        <AlertError error={error} />
        { posts && !isEmpty(posts.data) ?
          <div>
            <Pagination meta={posts.meta} position="top" onPageChange={onPageChange} />
            {posts.data.map((post) => (
              <PostDetail key={`post-${post.slug}`} post={post} />
            ))}
            <Pagination meta={posts.meta} position="bottom" onPageChange={onPageChange} />
          </div>
          : <Alert color="warning">No posts found for this topic</Alert> }
      </div>
    );
  }
}

Posts.propTypes = {
  onLoad: PropTypes.func.isRequired,
  onUnLoad: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
  posts: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  loading: PropTypes.bool,
  forumSlug: PropTypes.string.isRequired,
  topicSlug: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  forumSlug: makeSelectForumSlug(),
  topicSlug: makeSelectTopicSlug(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoad: (forumSlug) => dispatch(loadPosts(forumSlug)),
    onUnLoad: () => dispatch(unloadPosts()),
    changePage: (page) => dispatch(changePage(page)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'posts', reducer });
const withSaga = injectSaga({ key: 'posts', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Posts);
