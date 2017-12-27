import React from 'react';
import styled from 'styled-components';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import DropdownItem from 'components/DropdownItem';
import { filter, first, getOr } from 'lodash/fp';

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

class ForumDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.state = {
      dropdownOpen: false,
      selectedForum: false,
    };
  }

  componentWillUpdate() {
    // this.selectForum();
  }

  onSelect(e, forum) {
    e.preventDefault();
    const {
      props: { history },
    } = this;
    history.push(`/forums/${forum.slug}`);
    this.toggle();
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  render() {
    const {
      onSelect,
      props: { forums, forumSlug },
    } = this;
    const selectedForum = forums ? first(filter((forum) => forum.slug === forumSlug, forums.data)) : false;

    return (
      <DropdownS isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle
          tag="span"
          onClick={this.toggle}
          data-toggle="dropdown"
          aria-expanded={this.state.dropdownOpen}
          caret
        >
          {getOr('Loading...', 'title', selectedForum)}
        </DropdownToggle>
        <DropDownMenuS>
          {forums ? forums.data.map((forum) => (
            <DropdownItem onClick={(e) => onSelect(e, forum)} key={`forum-${forum.slug}`}>{forum.title}</DropdownItem>
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
  forumSlug: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  history: PropTypes.object.isRequired,
};
export default withRouter(ForumDropdown);
