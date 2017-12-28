/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import injectSaga from 'utils/injectSaga';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { restoreSession } from './actions';
import saga from './saga';

const Content = styled.div`
  background-color: #ecf0f1;
  border-top: solid 1px #e0e4e5;
`;


class App extends React.Component {

  componentDidMount() {
    this.props.restoreSession();
  }

  render() {
    return (
      <Container fluid>
        <Helmet
          titleTemplate="%s | React.js Forum"
          defaultTitle="React.js Forum"
        >
          <meta name="description" content="A React.js Forum" />
        </Helmet>
        <Header />
        <Content>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/forums/:slug" component={HomePage} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </Content>
        <Footer />
      </Container>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    restoreSession: () => dispatch(restoreSession()),
  };
}

const mapStateToProps = createStructuredSelector({
});

App.propTypes = {
  restoreSession: PropTypes.func.isRequired,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'app', saga });

export default compose(
  withSaga,
  withConnect,
)(App);
