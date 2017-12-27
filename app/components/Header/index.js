import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Navbar, Container, Col } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectCurrentUser, makeSelectForums, makeSelectGetSelectedForumSlug } from 'containers/App/selectors';
import { logout, loadForums } from 'containers/App/actions';
import ForumDropdown from 'components/ForumDropdown';
import LoginModal from 'components/LoginModal';
import SignUpModal from 'components/SignUpModal';
import A from 'components/A';
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
import Avatar from './Avatar';

const HeaderNavbar = styled(Navbar)`
  height: 70px;
  border-bottom: 1px solid #c9cccd;
`;

const SignupLinksWrapper = styled.div`
  margin-left: 5px;
`;

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleSignUp = this.toggleSignUp.bind(this);
    this.state = { openLogin: false, openSignUp: false };
  }

  componentDidMount() {
    this.props.onLoadForums();
  }

  onSubmit(values) {
    console.log(values); //eslint-disable-line
  }

  toggleLogin() {
    this.setState({ openLogin: !this.state.openLogin });
  }

  toggleSignUp() {
    this.setState({ openSignUp: !this.state.openSignUp });
  }

  render() {
    const {
      props: { history, currentUser, onLogout, forums, forumSlug },
      state: { openLogin, openSignUp },
      toggleLogin,
      toggleSignUp,
    } = this;
    return (
      <div>
        <Img src={Banner} alt="Forum - Banner" />
        {openLogin && !currentUser ? <LoginModal open={openLogin} toggle={toggleLogin} openSignUp={toggleSignUp} /> : null}
        {openSignUp && !currentUser ? <SignUpModal isOpen={openSignUp} openLogin={toggleLogin} toggle={toggleSignUp} /> : null}
        <HeaderNavbar>
          <Container>
            <FullRow>
              <Col lg="1" xs="3" sm="2" md="2">
                <Link to="/">
                  <img src={Logo} alt="logo" />
                </Link>
              </Col>
              <SelectTopic lg="3" xs="9" sm="5" md="2">
                <ForumDropdown forums={forums} forumSlug={forumSlug} />
              </SelectTopic>
              <SearchBox lg="4" md="3" className="hidden-xs hidden-sm">
                <Wrap>
                  <SearchForm onSubmit={this.onSubmit} />
                </Wrap>
              </SearchBox>
              <AvtBox lg="4" xs="12" sm="5" md="4">
                <div className="float-left">
                  <StartButton onClick={() => history.push('/topic/new')}>
                    Start New Topic
                  </StartButton>
                </div>
                {!currentUser ?
                  <SignupLinksWrapper className="float-left">
                    <A onClick={toggleLogin}>login</A> | <A onClick={toggleSignUp}>register</A>
                  </SignupLinksWrapper>
                : <Avatar user={currentUser} logout={onLogout} />}
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
  currentUser: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  forums: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  forumSlug: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  onLogout: PropTypes.func.isRequired,
  onLoadForums: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
  forums: makeSelectForums(),
  forumSlug: makeSelectGetSelectedForumSlug(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLogout: () => dispatch(logout()),
    onLoadForums: () => dispatch(loadForums()),
  };
}
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withRouter,
  withConnect
)(Header);
