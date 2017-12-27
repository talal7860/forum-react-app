/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { filter, getOr, first, isUndefined } from 'lodash/fp';

import injectReducer from 'utils/injectReducer';
import PostDetail from 'components/PostDetail';
import injectSaga from 'utils/injectSaga';
import { makeSelectForums, makeSelectGetSelectedForumSlug } from 'containers/App/selectors';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import reducer from './reducer';
import saga from './saga';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      props: {
        forumSlug,
        forums,
      },
    } = this;
    const forum = forums ? first(filter((f) => f.slug === forumSlug, forums.data)) : false;
    const title = forum ? forum.title : 'Forums Loading...';

    return (
      <div>
        {isUndefined(forum) ?
          <NotFoundPage />
          : (<article>
            <Helmet>
              <title>{title}</title>
              <meta name="description" content={getOr('Loading...', 'description', forum)} />
            </Helmet>
            <PostDetail post={forum} />
          </article>)
        }
      </div>
    );
  }
}

HomePage.propTypes = {
  forumSlug: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
  forums: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
};

export function mapDispatchToProps() {
  return {
  };
}

const mapStateToProps = createStructuredSelector({
  forums: makeSelectForums(),
  forumSlug: makeSelectGetSelectedForumSlug(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
