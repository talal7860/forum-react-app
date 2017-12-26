/**
*
* LoginModal
*
*/

import React from 'react';

import Login from 'containers/Login';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const LoginModal = ({ open, toggle, openSignUp }) => (
  <div>
    <Modal isOpen={open} toggle={toggle} backdrop>
      <ModalHeader toggle={toggle}>Login</ModalHeader>
      <ModalBody>
        <Login />
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={openSignUp}>Register</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  </div>
);

LoginModal.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  openSignUp: PropTypes.func.isRequired,
};

export default LoginModal;
