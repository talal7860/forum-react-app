/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import HomePage from 'containers/HomePage/Loadable';
import Login from 'containers/Login';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';


export default function App() {
  return (
    <Container fluid>
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
    </Container>
  );
}
