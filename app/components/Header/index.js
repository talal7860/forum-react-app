import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Navbar, Container, Col } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';

import ForumDropdown from 'components/ForumDropdown';
import SelectTopic from './SelectTopic';
import SearchBox from './SearchBox';
import Img from './Img';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import Logo from './logo.jpg';
import Wrap from './Wrap';
import AvtBox from './AvtBox';
import StartButton from './StartButton';
import FullRow from './FullRow';

import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      props: { history },
    } = this;
    return (
      <div>
        <Img src={Banner} alt="Forum - Logo" />
        <Navbar>
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
                </Wrap>
              </SearchBox>
              <AvtBox lg="4" xs="12" sm="5" md="4">
                <div className="float-left">
                  <StartButton onClick={() => history.push('/topic/new')}>
                    Start New Topic
                  </StartButton>
                </div>
              </AvtBox>
              <HeaderLink to="/">
                <FormattedMessage {...messages.home} />
              </HeaderLink>
              <HeaderLink to="/login">
                <FormattedMessage {...messages.login} />
              </HeaderLink>
            </FullRow>
          </Container>
        </Navbar>
      </div>
    );
  }
}

Header.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Header);
