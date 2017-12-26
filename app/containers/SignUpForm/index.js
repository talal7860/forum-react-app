/**
 *
 * SignUpForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import AlertError from 'components/AlertError';
import { makeSelectSignUpForm, makeSelectError, makeSelectLoading } from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import { signUp, unmount } from './actions';
import Form from './Form';

export class SignUpForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.onUnmount();
  }

  onSubmit(values) {
    this.props.onSignUp(values);
  }

  render() {
    const {
      props: {
        error,
        loading,
      },
    } = this;
    return (
      <div>
        <AlertError error={error} />
        {loading ? 'Loading...' : null }
        <Form onSubmit={this.onSubmit} />
      </div>
    );
  }
}

SignUpForm.propTypes = {
  onSignUp: PropTypes.func,
  onUnmount: PropTypes.func,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  loading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  signupform: makeSelectSignUpForm(),
  error: makeSelectError(),
  loading: makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSignUp: (params) => dispatch(signUp(params)),
    onUnmount: () => dispatch(unmount()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'signUpForm', reducer });
const withSaga = injectSaga({ key: 'signUpForm', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SignUpForm);
