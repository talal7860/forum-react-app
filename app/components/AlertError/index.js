/**
*
* AlertError
*
*/

import React from 'react';
import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


const AlertError = ({ error }) => (
  <span>{ error ? <Alert color="danger">{error}</Alert> : null }</span>
);

AlertError.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
};

export default AlertError;
