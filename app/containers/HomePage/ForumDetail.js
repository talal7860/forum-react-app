import React from 'react';
import PropTypes from 'prop-types';

import Profile from 'components/Header/profile.png';
import PostWrapper from 'components/PostWrapper';
import PostUserInfo from 'components/PostUserInfo';
import PostAvatar from 'components/PostAvatar';
import PostAvatarImg from 'components/PostAvatarImg';
import PostText from 'components/PostText';
import PostH2 from 'components/PostH2';
import PostInfoBot from 'components/PostInfoBot';
import PostPrev from 'components/PostPrev';
import PostNext from 'components/PostNext';
import Posted from 'components/Posted';
import PostStatus from 'components/PostStatus';
import PostA from 'components/PostA';
import PostI from 'components/PostI';

const ForumDetail = ({
  post: {
    slug,
    title,
    description,
    created_at: createdAt,
  } }) => {
  const key = `forum-${slug}`;
  return (
    <PostWrapper key={`forum-wrapper-${key}`}>
      <div key={`top-wrapper-${key}`} className="topwrap">
        <PostUserInfo key={`user-info-${key}`} className="float-left">
          <PostAvatar key={`avatar-${key}`}>
            <PostAvatarImg key={`avatar-img-${key}`} src={Profile} alt={title} />
            <PostStatus key={`status-${key}`} className="green"></PostStatus>
          </PostAvatar>
        </PostUserInfo>
        <PostText key={`forum-text-${key}`} className="float-left">
          <PostH2 key={`h2-${key}`}>{title}</PostH2>
          <p key={`forum-text-p-${key}`}>{description}</p>
        </PostText>
        <div key={`forum-text-clearfix-${key}`} className="clearfix" />
      </div>
      <PostInfoBot key={`forum-info-bot-${key}`}>
        <PostPrev key={`forum-info-prev-${key}`} className="float-left">
          <PostA key={`forum-info-prev-a-${key}`} href="#"><i className="fa fa-reply" /></PostA>
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

ForumDetail.propTypes = {
  post: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
};

export default ForumDetail;
