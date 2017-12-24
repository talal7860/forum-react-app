import React from 'react';
import styled from 'styled-components';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const DropdownS = styled(Dropdown)`
  > button {
    background-color: transparent;
    color: black;
    border: none;
  }
`;

class ForumDropdown extends React.Component {
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
    return (
      <DropdownS isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Forum 1
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Forum 2</DropdownItem>
          <DropdownItem>Forum 3</DropdownItem>
          <DropdownItem>Forum 4</DropdownItem>
        </DropdownMenu>
      </DropdownS>
    );
  }
}

export default ForumDropdown;
