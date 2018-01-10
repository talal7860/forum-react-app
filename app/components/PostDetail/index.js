/**
*
* PostDetail
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import PostWrapper from 'components/PostWrapper';
import PostUserInfo from 'components/PostUserInfo';
import PostAvatar from 'components/PostAvatar';
import PostAvatarImg from 'components/PostAvatarImg';
import PostText from 'components/PostText';
import PostInfoBot from 'components/PostInfoBot';
import PostPrev from 'components/PostPrev';
import PostNext from 'components/PostNext';
import Posted from 'components/Posted';
import PostStatus from 'components/PostStatus';
import PostA from 'components/PostA';
import PostI from 'components/PostI';

const PostDetail = ({
  post: {
    id,
    content,
    created_at: createdAt,
    added_by: {
      avatar: { thumb },
      name,
    },
  } }) => {
  const key = `post-${id}`;
  return (
    <PostWrapper key={`post-wrapper-${key}`}>
      <div key={`top-wrapper-${key}`} className="topwrap">
        <PostUserInfo key={`user-info-${key}`} className="float-left">
          <PostAvatar key={`avatar-${key}`}>
            <PostAvatarImg key={`avatar-img-${key}`} src={thumb} alt={name} />
            <PostStatus key={`status-${key}`} className="green"></PostStatus>
          </PostAvatar>
        </PostUserInfo>
        <PostText key={`post-text-${key}`} className="float-left">
          <p key={`post-text-p-${key}`}>{content}</p>
        </PostText>
        <div key={`post-text-clearfix-${key}`} className="clearfix" />
      </div>
      <PostInfoBot key={`post-info-bot-${key}`}>
        <PostPrev key={`post-info-prev-${key}`} className="float-left">
          <PostA key={`post-info-prev-a-${key}`} href="#"><i className="fa fa-reply" /></PostA>
        </PostPrev>
        <Posted key={`posted-${key}`} className="posted float-left"><i className="fa fa-clock-o" /> Posted on : {createdAt}</Posted>
        <PostNext key={`posted-next-${key}`} className="float-right">
          <PostA key={`posted-next-a-${key}`} href="#"><PostI className="fa fa-share" /></PostA>
          <PostA key={`posted-next-flag-a-${key}`} href="#"><i className="fa fa-flag" /></PostA>
        </PostNext>
        <div key={`posted-next-clearfix-${key}`} className="clearfix" />
      </PostInfoBot>
    </PostWrapper>
  );
};

PostDetail.propTypes = {
  post: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
};

PostDetail.defaultProps = {
  key: 'key',
};

export default PostDetail;
