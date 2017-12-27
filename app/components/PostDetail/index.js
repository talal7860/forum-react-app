/**
*
* PostDetail
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Profile from 'components/Header/profile.png';

const PostWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 0 1px 2px #c9cccd;
  margin-bottom: 20px;
`;

const UserInfo = styled.div`
  padding: 20px 0 15px 15px;
  width: 12%;
`;

const Avatar = styled.div`
  position: relative;
  width: 37px;
  margin-left: 5px;
`;

const AvatarImg = styled.img`
  border-radius: 50%;
  width: 37px;
`;

const PostText = styled.div`
  width: 88%;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 15px;
  color: #989c9e;
  font-size: 14px;
  font-family: 'Open Sans Light', sans-serif;
  line-height: 25px;
`;

const H2 = styled.h2`
  color: #363838;
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const PostInfoBot = styled.div`
  border-top: solid 1px #f1f1f1;
  line-height: 50px;
  padding: 0 30px 0 94px;
`;

const Prev = styled.div`
  width: 30px;
`;

const Next = styled.div`
  width: 90px;
  text-align: right;
`;

const Posted = styled.div`
  width: 300px;
  margin-left: 18px;
  font-size: 12px;
  color: #bdc3c7;
`;

const A = styled.a`
  font-size: 18px;
  color: #bdc3c7;
`;

const Status = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 12px;
  height: 12px;
  line-height: 12px;
  border-radius: 50%;
  border: solid 2px #ffffff;
`;

const PostDetail = ({ post }) => (
  <PostWrapper>
    <div className="topwrap">
      <UserInfo className="float-left">
        <Avatar>
          <AvatarImg src={Profile} alt />
          <Status className="green"></Status>
        </Avatar>
      </UserInfo>
      <PostText className="float-left">
        <H2>{post.title}</H2>
        <p>{post.description}</p>
      </PostText>
      <div className="clearfix" />
    </div>
    <PostInfoBot>
      <Prev className="float-left">
        <A href="#"><i className="fa fa-reply" /></A>
      </Prev>
      <Posted className="posted float-left"><i className="fa fa-clock-o" /> Posted on : 20 Nov @ 9:30am</Posted>
      <Next className="float-right">
        <A href="#"><i className="fa fa-share" /></A>
        <A href="#"><i className="fa fa-flag" /></A>
      </Next>
      <div className="clearfix" />
    </PostInfoBot>
  </PostWrapper>
);

PostDetail.propTypes = {
  post: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
};

export default PostDetail;
