/**
 *
 * TopicShow
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Posts from 'containers/Posts';
import { Container } from 'reactstrap';
import { isUndefined, isBoolean, getOr } from 'lodash/fp';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { makeSelectTopicSlug, makeSelectForumSlug } from 'containers/App/selectors';
import { makeSelectTopic, makeSelectError } from './selectors';
import { loadTopic, unloadTopic } from './actions';
import TopicDetail from './TopicDetail';
import reducer from './reducer';
import saga from './saga';

export class TopicShow extends React.Component {

  componentDidMount() {
    const {
      props: { topicSlug, onLoad },
    } = this;
    onLoad(topicSlug);
  }
  render() {
    const {
      props: {
        topic,
        topicSlug,
        forumSlug,
      },
    } = this;
    const topicTitle = topic.data ? topic.data.title : 'Topic Loading...';

    return (
      <Container>
        {isUndefined(topic) || isBoolean(topic) ?
          <NotFoundPage />
          : (<article>
            <Helmet>
              <title>{topicTitle} | Topic</title>
              <meta name="description" content={getOr('Loading...', 'description', topic)} />
            </Helmet>
            {topic ? <TopicDetail topic={topic.data} /> : null}
            { <Posts forumSlug={forumSlug} topicSlug={topicSlug} /> }
          </article>)
        }
      </Container>
    );
  }
}

TopicShow.propTypes = {
  topicSlug: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  forumSlug: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  topic: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
  onLoad: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  topic: makeSelectTopic(),
  error: makeSelectError(),
  topicSlug: makeSelectTopicSlug(),
  forumSlug: makeSelectForumSlug(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoad: (topicSlug) => dispatch(loadTopic(topicSlug)),
    onUnLoad: () => dispatch(unloadTopic()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'topicShow', reducer });
const withSaga = injectSaga({ key: 'topicShow', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TopicShow);
