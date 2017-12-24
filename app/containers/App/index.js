/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import HomePage from 'containers/HomePage/Loadable';
import Login from 'containers/Login';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

const ContainerFluid = styled(Container)`
  @media (min-width: 1201px) {
    padding: 0;
  }
`;

export default function App() {
  return (
    <ContainerFluid fluid>
      <Helmet
        titleTemplate="%s | React.js Forum"
        defaultTitle="React.js Forum"
      >
        <meta name="description" content="A React.js Forum" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
    </ContainerFluid>
  );
}
