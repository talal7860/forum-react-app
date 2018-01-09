/**
*
* Loader
*
*/

import React from 'react';
import styled from 'styled-components';

import LoadingIndicator from '../LoadingIndicator';


const LoaderWrapper = styled.div`
  transform: translate(-50%, -50%);
  position: fixed;
  top: 50%;
  left: 50%;
`;

const Loader = () => (
  <LoaderWrapper className="loader">
    <LoadingIndicator />
  </LoaderWrapper>
);

export default Loader;
