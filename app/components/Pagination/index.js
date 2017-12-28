/**
*
* Pagination
*
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PrevNext = styled.a`
  font-size: 26px;
  color: #cfd5d7 !important;
  margin-top: 11px;
  display: block;
`;

const PrevNextLast = styled(PrevNext)`
  margin-left: 20px;
`;

const PaginationUl = styled.ul`
  margin: 19px auto;
  padding: 0;
`;

const PaginationLi = styled.li`
  list-style: none;
  display: inline-block;
  margin-left: 20px;
`;

const PaginationA = styled.a`
  min-width: 24px;
  height: 24px;
  font-size: 14px;
  font-family: 'Open Sans Semibold', sans-serif;
  color: #ffffff !important;
  background-color: #cfd5d7;
  border-radius: 2px;
  display: block;
  padding: 0 8px;
  line-height: 24px;
  &.active {
    color: #363838 !important;
    background-color: #ffffff;
    box-shadow: 0 1px 2px #c9cccd;
    font-family: 'Open Sans Bold', sans-serif;
    text-decoration: none;
  }
`;


const Pagination = ({ currentPage: current_page, totalPages: total_pages  }) => (
  <div>
    <div className="float-left">
      <PrevNext className="prevnext">
        <i className="fa fa-angle-left"></i>
      </PrevNext>
    </div>
    <div className="float-left hidden-xs">
      <PaginationUl>
        <PaginationLi>
          <PaginationA className="active">1</PaginationA>
        </PaginationLi>
        <PaginationLi>
          <PaginationA>2</PaginationA>
        </PaginationLi>
      </PaginationUl>
    </div>
    <div className="float-left">
      <PrevNextLast className="prevnext"><i className="fa fa-angle-right"></i></PrevNextLast>
    </div>
    <div className="clearfix" />
  </div>
);

Pagination.propTypes = {
  meta: PropTypes.shape({
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
  }),
};

export default Pagination;
