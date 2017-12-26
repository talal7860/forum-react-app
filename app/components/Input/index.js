/**
*
* Input
*
*/

import React from 'react';
import { Input as BInput, FormGroup, Label, FormFeedback, Col } from 'reactstrap';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

const Input = ({ input, label, type, meta: { touched, error }, placeholder }) => (
  <FormGroup>
    {label ? <Col><Label for={label}>{label}</Label></Col> : null}
    <Col>
      <BInput {...input} type={type} valid={(!touched) || (touched && !error)} placeholder={placeholder} />
      {(touched && error) ? <FormFeedback>{error}</FormFeedback> : null}
    </Col>
  </FormGroup>
);

Input.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  placeholder: PropTypes.string,
};

export default Input;
