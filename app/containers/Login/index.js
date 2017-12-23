/**
 *
 * Login
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import Input from 'containers/HomePage/Input';
import injectReducer from 'utils/injectReducer';
import { makeSelectLogin, makeSelectUserData, makeSelectError, makeSelectLoading } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Form from './Form';
import { login } from './actions';
import messages from './messages';

export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { params: { email: '', password: '' } };
    this.onChangeForm = this.onChangeForm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeForm(e) {
    const params = this.state.params;
    params[e.target.name] = e.target.value;
    this.setState({ params });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onLogin(this.state.params);
  }

  render() {
    const {
      props: {
        error,
        user,
        loading,
      },
    } = this;
    return (
      <div>
        <Helmet>
          <title>Forum Login</title>
          <meta name="description" content="Forum Login" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        {error}
        {user ? user.id : ''}
        {loading ? 'Loading...' : ''}
        <Form onSubmit={this.onSubmit}>
          <label htmlFor="email">
            <Input
              id="email"
              type="text"
              name="email"
              placeholder="email"
              value={this.state.params.email}
              onChange={this.onChangeForm}
            />
          </label>
          <label htmlFor="password">
            <Input
              id="password"
              type="text"
              name="password"
              placeholder="Password"
              value={this.state.params.password}
              onChange={this.onChangeForm}
            />
          </label>
          <Input type="submit" />
        </Form>
      </div>
    );
  }
}

Login.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  onLogin: PropTypes.func,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  loading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
  error: makeSelectError(),
  loading: makeSelectLoading(),
  user: makeSelectUserData(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLogin: (params) => dispatch(login(params)),
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
