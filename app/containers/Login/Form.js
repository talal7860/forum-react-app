import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'reactstrap';
import Input from 'components/Input';
import PropTypes from 'prop-types';
import { required, email } from 'utils/validations';

const LoginForm = ({ handleSubmit, pristine, submitting }) => (
  <Form onSubmit={handleSubmit}>
    <Field
      name="email"
      component={Input}
      type="email"
      placeholder="Email"
      validate={[required, email]}
    />
    <Field
      name="password"
      component={Input}
      type="password"
      placeholder="Password"
      validate={[required]}
    />
    <Button type="submit" disabled={pristine && submitting}>Login</Button>
  </Form>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
};


export default reduxForm({
  form: 'login-form', // a unique identifier for this form
})(LoginForm);

