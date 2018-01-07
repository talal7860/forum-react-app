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
import { Alert } from 'reactstrap';
import { isEmpty } from 'lodash/fp';
import { withRouter } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import AlertError from 'components/AlertError';
import Pagination from 'components/Pagination';
import { makeSelectLoading } from 'containers/App/selectors';
import ListItem from './ListItem';
import { makeSelectTopics, makeSelectError } from './selectors';
import { loadTopics, unloadTopics, changePage } from './actions';
import reducer from './reducer';
import saga from './saga';

export class Topics extends React.Component { // eslint-disable-line react/prefer-stateless-function
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

  openTopic(topic) {
    const {
      props: {
        forumSlug,
        history,
      },
    } = this;
    history.push(`/forums/${forumSlug}/topics/${topic.slug}`);
  }

  render() {
    const {
      props: {
        topics,
        loading,
        error,
      },
      onPageChange,
      openTopic,
    } = this;

    return (
      <div>
        { loading ? <Alert color="danger">Loading...</Alert> : null }
        <AlertError error={error} />
        { topics && !isEmpty(topics.data) ?
          <div>
            <Pagination meta={topics.meta} position="top" onPageChange={onPageChange} />
            {topics.data.map((topic) => (
              <ListItem key={`topic-${topic.slug}`} post={topic} onClick={openTopic} />
            ))}
            <Pagination meta={topics.meta} position="bottom" onPageChange={onPageChange} />
          </div>
          : <Alert color="warning">No topics found for this forum</Alert> }
      </div>
    );
  }
}

Topics.propTypes = {
  onLoad: PropTypes.func.isRequired,
  onUnLoad: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
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
  history: PropTypes.object.isRequired,
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
    changePage: (page) => dispatch(changePage(page)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'topics', reducer });
const withSaga = injectSaga({ key: 'topics', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withRouter,
)(Topics);
