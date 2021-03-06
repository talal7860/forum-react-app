/**
 *
 * Login
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import AlertError from 'components/AlertError';
import { makeSelectError, makeSelectLoading } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Form from './Form';
import { login, unmount } from './actions';

export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.onUnmount();
  }

  onSubmit(values) {
    this.props.onLogin(values);
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
        {loading ? 'Loging In...' : null}
        <Form onSubmit={this.onSubmit} />
      </div>
    );
  }
}

Login.propTypes = {
  onLogin: PropTypes.func,
  onUnmount: PropTypes.func,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  loading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
  loading: makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLogin: (params) => dispatch(login(params)),
    onUnmount: () => dispatch(unmount()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Login);
