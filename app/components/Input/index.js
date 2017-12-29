/**
*
* Input
*
*/

import React from 'react';
import { Input as BInput, FormGroup, Label, FormFeedback, Col } from 'reactstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled(BInput)`
  border-radius: 2px;
  box-shadow: none;
  border: none;
  background-color: #f1f1f1;
  padding: 20px;
  font-size: 14px;
  color: #989c9e;
  font-family: 'Open Sans Light', sans-serif;
  margin-bottom: 20px;
  height: 50px;
`;
// import styled from 'styled-components';

const Input = ({ input, label, type, meta: { touched, error }, placeholder }) => (
  <FormGroup>
    {label ? <Col><Label for={label}>{label}</Label></Col> : null}
    <Col>
      <StyledInput {...input} type={type} valid={(!touched) || (touched && !error)} placeholder={placeholder} />
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
