/**
 *
 * TopicNew
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Container, Row, Col, Alert } from 'reactstrap';
import styled from 'styled-components';

import injectSaga from 'utils/injectSaga';
import PostWrapper from 'components/PostDetail/PostWrapper';
import injectReducer from 'utils/injectReducer';
import AlertError from 'components/AlertError';
import { makeSelectGetSelectedForumSlug } from 'containers/App/selectors';
import { makeSelectTopicNewError, makeSelectTopicNewLoading, makeSelectTopicNewSuccess } from './selectors';
import { topicNewUnmount, topicNewCreate } from './actions';
import reducer from './reducer';
import saga from './saga';
import Form from './Form';

const H2 = styled.h2`
  color: #363838;
  font-size: 14px;
  font-family: 'Open Sans Bold', sans-serif;
  padding: 20px;
  margin: 0;
  border-bottom: solid 1px #f1f1f1;
`;


export class TopicNew extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillUnmount() {
    this.props.onUnmount();
  }

  render() {
    const {
      props: { onSubmit, error, loading, success, forumSlug, history },
    } = this;
    if (success) {
      setTimeout(() => history.push(`/forums/${forumSlug}`), 1000);
    }
    return (
      <div>
        <Helmet>
          <title>New Topic</title>
          <meta name="description" content="Description of TopicNew" />
        </Helmet>
        <Container>
          <Row>
            <Col lg="12" md="12">
              <PostWrapper>
                <H2>Create new topic</H2>
                {success ?
                  <Alert color="success">Topic has been created successfully</Alert> :
                  null
                }
                {loading ?
                  <Alert color="warning">Loading...</Alert> :
                  null
                }
                <AlertError error={error} />
                <Form onSubmit={onSubmit} />
              </PostWrapper>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

TopicNew.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onUnmount: PropTypes.func,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  forumSlug: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  history: PropTypes.object,
  loading: PropTypes.bool,
  success: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  error: makeSelectTopicNewError(),
  loading: makeSelectTopicNewLoading(),
  success: makeSelectTopicNewSuccess(),
  forumSlug: makeSelectGetSelectedForumSlug(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (values) => dispatch(topicNewCreate(values)),
    onUnmount: () => dispatch(topicNewUnmount()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'topicNew', reducer });
const withSaga = injectSaga({ key: 'topicNew', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withRouter,
)(TopicNew);
