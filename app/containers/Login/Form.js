import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Form, Button, Col } from 'reactstrap';
import Input from 'components/Input';
import PropTypes from 'prop-types';
import { required, email, minLength8 } from 'utils/validations';

const LoginForm = ({ handleSubmit, pristine, submitting }) => (
  <Form onSubmit={handleSubmit}>
    <Field
      name="email"
      component={Input}
      type="email"
      placeholder="Email"
      label="Email"
      validate={[required, email]}
    />
    <Field
      name="password"
      component={Input}
      type="password"
      placeholder="Password"
      label="Password"
      validate={[required, minLength8]}
    />
    <Col>
      <Button color="primary" className="float-right" type="submit" disabled={pristine && submitting}>Login</Button>
    </Col>
  </Form>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
};


export default reduxForm({
  form: 'login', // a unique identifier for this form
})(LoginForm);

