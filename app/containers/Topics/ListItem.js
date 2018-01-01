import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

import Profile from 'components/Header/profile.png';
import PostWrapper from 'components/PostWrapper';
import PostUserInfo from 'components/PostUserInfo';
import PostAvatar from 'components/PostAvatar';
import PostAvatarImg from 'components/PostAvatarImg';
import PostText from 'components/PostText';
import PostH2 from 'components/PostH2';
import PostStatus from 'components/PostStatus';

const ItemPostText = styled(PostText)`
  width: 85%;
`;

const PostInfo = styled.div`
  width: 15%;
  border-left: solid 1px #f1f1f1;
`;

const TopWrap = styled.div`
  width: 85%;
`;

const Comments = styled.div`
  border-bottom: solid 1px #f1f1f1;
  padding: 18px 0 25px 0;
  text-align: center;
`;

const CommentsBg = styled.div`
  background-color: #bdc3c7;
  border-radius: 2px;
  display: inline-block;
  padding: 12px 17px;
  color: #ffffff;
  font-size: 14px;
  position: relative;
`;

const CommentMark = styled.div`
  width: 11px;
  height: 11px;
  background-color: #bdc3c7;
  position: absolute;
  bottom: 0;
  left: 43%;
  margin-bottom: -5px;
  transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;

const Views = styled.div`
  border-bottom: solid 1px #f1f1f1;
  color: #9da6aa;
  font-size: 12px;
  font-family: 'Open Sans Regular', sans-serif;
  text-align: center;
  line-height: 29px;
  i {
    font-size: 14px;
  }
`;

const Time = styled.div`
  color: #9da6aa;
  font-size: 12px;
  font-family: 'Open Sans Regular', sans-serif;
  text-align: center;
  line-height: 29px;
  i {
    font-size: 14px;
  }
`;

const ListItem = ({
  post: {
    slug,
    title,
    description,
    created_at_i: createdAt,
    posts_count: postsCount,
    views,
  } }) => {
  const key = `topic-${slug}`;
  return (
    <PostWrapper key={`topic-wrapper-${key}`}>
      <TopWrap key={`top-wrapper-${key}-div`} className="topwrap float-left">
        <PostUserInfo key={`user-info-${key}`} className="float-left">
          <PostAvatar key={`avatar-${key}`}>
            <PostAvatarImg key={`avatar-img-${key}`} src={Profile} alt={title} />
            <PostStatus key={`status-${key}`} className="green"></PostStatus>
          </PostAvatar>
        </PostUserInfo>
        <ItemPostText key={`topic-text-${key}`} className="float-left">
          <PostH2 key={`h2-${key}`}>{title}</PostH2>
          <p key={`topic-text-p-${key}`}>{description}</p>
        </ItemPostText>
        <div key={`topic-text-clearfix-${key}`} className="clearfix" />
      </TopWrap>
      <PostInfo className="float-left">
        <Comments>
          <CommentsBg>
            {postsCount}
            <CommentMark />
          </CommentsBg>
        </Comments>
        <Views>
          <i className="fa fa-eye"></i>{views}
        </Views>
        <Time>
          <i className="fa fa-clock-o"></i> {moment.duration(createdAt).humanize()}
        </Time>
      </PostInfo>
      <div className="clearfix" />
    </PostWrapper>
  );
};

ListItem.propTypes = {
  post: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
};

export default ListItem;

