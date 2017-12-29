import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from 'components/Header/logo.jpg';
import Wrapper from './Wrapper';

const SocialLi = styled.li`
  display: inline-block;
  list-style: none;
  font-size: 18px;
  color: #bdc3c7;
  margin-left: 15px;
`;

const A = styled.a`
  color: #bdc3c7;
`;


function Footer() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col lg="1" xs="3" sm="2">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </Col>
          <Col lg="8" xs="9" sm="5">
            Copyrights 2017, myforum.com
          </Col>
          <Col lg="3" xs="12" sm="5">
            <ul>
              <SocialLi>
                <A href="https://facebook.com/talal7861" target="_blank">
                  <i className="fa fa-facebook-square"></i>
                </A>
              </SocialLi>
              <SocialLi>
                <A href="https://twitter.com/talal7860" target="_blank">
                  <i className="fa fa-twitter"></i>
                </A>
              </SocialLi>
              <SocialLi>
                <A href="https://plus.google.com/+TalalArshad" target="_blank">
                  <i className="fa fa-google-plus"></i>
                </A>
              </SocialLi>
              <SocialLi>
                <A href="https://dribbble.com/talal7860" target="_blank">
                  <i className="fa fa-dribbble"></i>
                </A>
              </SocialLi>
            </ul>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default Footer;
