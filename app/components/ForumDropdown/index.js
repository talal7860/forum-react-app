import React from 'react';
import styled from 'styled-components';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import PropTypes from 'prop-types';

const DropdownS = styled(Dropdown)`
  > button {
    background-color: transparent;
    color: black;
    border: none;
  }
`;

const DropDownMenuS = styled(DropdownMenu)`
  max-height: 200px;
  overflow: auto;
`;

const DropdownItem = styled.div`
  display: block;
  padding: 3px 20px;
  clear: both;
  font-weight: 300;
  line-height: 1.42857143;
  color: #333;
  white-space: nowrap;
  &:hover {
    background-color: #e8e8e8a8;
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
    const {
      props: { forums },
    } = this;
    return (
      <DropdownS isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle
          tag="span"
          onClick={this.toggle}
          data-toggle="dropdown"
          aria-expanded={this.state.dropdownOpen}
          caret
        >
          Forum 1
        </DropdownToggle>
        <DropDownMenuS>
          {forums ? forums.data.map((forum) => (
            <DropdownItem key={`forum-${forum.slug}`}>{forum.title}</DropdownItem>
          )) : <DropdownItem>Loading...</DropdownItem>}
        </DropDownMenuS>
      </DropdownS>
    );
  }
}
ForumDropdown.propTypes = {
  forums: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
};
export default ForumDropdown;
