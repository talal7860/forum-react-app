import React from 'react';
import styled from 'styled-components';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import PropTypes from 'prop-types';
import DropdownItem from 'components/DropdownItem';

import Profile from './profile.png';

const Img = styled.img`
  width: 37px;
`;

const AvatarDropdown = styled(Dropdown)`
  margin-left: 10px;
`;

class Avatar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  render() {
    const { props: { user, logout } } = this;
    return (
      <AvatarDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="float-left">
        <DropdownToggle
          tag="span"
          onClick={this.toggle}
          data-toggle="dropdown"
          aria-expanded={this.state.dropdownOpen}
          caret
        >
          <Img src={Profile} alt={user.firt_name} />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={this.toggle}>My Profile</DropdownItem>
          <DropdownItem onClick={logout}>Log Out</DropdownItem>
        </DropdownMenu>
      </AvatarDropdown>
    );
  }
}

Avatar.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func,
};

export default Avatar;
