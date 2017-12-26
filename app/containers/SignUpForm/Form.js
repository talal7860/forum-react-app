import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Form, Button, Col, Row } from 'reactstrap';
import Input from 'components/Input';
import PropTypes from 'prop-types';
import { required, email, minLength8, phoneNumber, alphaNumeric } from 'utils/validations';

const SignUpForm = ({ handleSubmit, pristine, submitting }) => (
  <Form onSubmit={handleSubmit}>
    <Row>
      <Col md="6">
        <Field
          name="first_name"
          component={Input}
          type="text"
          placeholder="First Name"
          label="First Name"
          validate={[required]}
        />
      </Col>
      <Col md="6">
        <Field
          name="last_name"
          component={Input}
          type="text"
          placeholder="Last Name"
          label="Last Name"
          validate={[required]}
        />
      </Col>
    </Row>
    <Row>
      <Col md="6">
        <Field
          name="email"
          component={Input}
          type="email"
          placeholder="Email"
          label="Email"
          validate={[required, email]}
        />
      </Col>
      <Col md="6">
        <Field
          name="username"
          component={Input}
          type="text"
          placeholder="Username"
          label="Username"
          validate={[required, alphaNumeric]}
        />
      </Col>
    </Row>
    <Row>
      <Col md="12">
        <Field
          name="phone_number"
          component={Input}
          type="text"
          placeholder="Phone Number"
          label="Phone Number"
          validate={[required, phoneNumber]}
        />
      </Col>
    </Row>
    <Row>
      <Col md="6">
        <Field
          name="password"
          component={Input}
          type="password"
          placeholder="Password"
          label="Password"
          validate={[required, minLength8]}
        />
      </Col>
      <Col md="6">
        <Field
          name="password_confirmation"
          component={Input}
          type="password"
          placeholder="Password Confirmation"
          label="Password Confirmation"
          validate={[required, minLength8]}
        />
      </Col>
    </Row>
    <Col>
      <Button color="primary" className="float-right" type="submit" disabled={pristine && submitting}>Sign Up</Button>
    </Col>
  </Form>
);

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
};


export default reduxForm({
  form: 'signup', // a unique identifier for this form
})(SignUpForm);
