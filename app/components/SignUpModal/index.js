/**
*
* SignUpModal
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from 'containers/SignUpForm';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const SignUpModal = ({ isOpen, toggle, openLogin }) => (
  <div>
    <Modal isOpen={isOpen} toggle={toggle} backdrop>
      <ModalHeader toggle={toggle}>Sign Up</ModalHeader>
      <ModalBody>
        <SignUpForm />
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={openLogin}>Login</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  </div>
);

SignUpModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  openLogin: PropTypes.func.isRequired,
};

export default SignUpModal;
