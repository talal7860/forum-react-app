import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Navbar, Container, Col } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';

import ForumDropdown from 'components/ForumDropdown';
import SelectTopic from './SelectTopic';
import SearchBox from './SearchBox';
import Img from './Img';
import Banner from './banner.jpg';
import Logo from './logo.jpg';
import Wrap from './Wrap';
import AvtBox from './AvtBox';
import StartButton from './StartButton';
import FullRow from './FullRow';
import SearchForm from './SearchForm';

const HeaderNavbar = styled(Navbar)`
  height: 70px;
  border-bottom: 1px solid #c9cccd;
`;

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log(values); //eslint-disable-line
  }

  render() {
    const {
      props: { history },
    } = this;
    return (
      <div>
        <Img src={Banner} alt="Forum - Banner" />
        <HeaderNavbar>
          <Container>
            <FullRow>
              <Col lg="1" xs="3" sm="2" md="2">
                <Link to="/">
                  <img src={Logo} alt="logo" />
                </Link>
              </Col>
              <SelectTopic lg="3" xs="9" sm="5" md="2">
                <ForumDropdown />
              </SelectTopic>
              <SearchBox lg="4" md="3" className="hidden-xs hidden-sm">
                <Wrap>
                  <SearchForm handleSubmit={this.handleSubmit} />
                </Wrap>
              </SearchBox>
              <AvtBox lg="4" xs="12" sm="5" md="4">
                <div className="float-left">
                  <StartButton onClick={() => history.push('/topic/new')}>
                    Start New Topic
                  </StartButton>
                </div>
              </AvtBox>
            </FullRow>
          </Container>
        </HeaderNavbar>
      </div>
    );
  }
}

Header.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Header);
