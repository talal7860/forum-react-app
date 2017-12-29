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
  &:hover {
    cursor: pointer;
  }
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
  &:hover {
    cursor: pointer;
  }
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

const FlexContainer = styled.div`
  justify-content: center;
  display: flex;
`;


class Pagination extends React.Component {

  constructor(props) {
    super(props);
    this.onNext = this.onNext.bind(this);
    this.onPrev = this.onPrev.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
  }

  onNext(e) {
    e.preventDefault();
    const {
      props: {
        meta: {
          current_page: currentPage,
          total_pages: totalPages,
        },
        onPageChange,
      },
    } = this;
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  }

  onPrev(e) {
    e.preventDefault();
    const {
      props: {
        meta: {
          current_page: currentPage,
        },
        onPageChange,
      },
    } = this;
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  }

  onPageChange(e, page) {
    e.preventDefault();
    this.props.onPageChange(page);
  }

  render() {
    const {
      onNext,
      onPrev,
      onPageChange,
      props: {
        meta: {
          current_page: currentPage,
          total_pages: totalPages,
        },
        position,
      },
    } = this;
    const pages = [];
    for (let i = 1; i <= totalPages; i += 1) {
      pages[i - 1] = i;
    }

    return (
      <div>
        { totalPages > 1 ? (
          <FlexContainer>
            <div className="float-left">
              <PrevNext onClick={onPrev} className="prevnext">
                <i className="fa fa-angle-left"></i>
              </PrevNext>
            </div>
            <div className="float-left hidden-xs">
              <PaginationUl>
                { (pages).map((page) => (
                  <PaginationLi key={`${position}-page-${page}`}>
                    <PaginationA onClick={(e) => onPageChange(e, page)} key={`${position}-page-a-${page}`} className={page === currentPage ? 'active' : null}>
                      {page}
                    </PaginationA>
                  </PaginationLi>
                )) }
              </PaginationUl>
            </div>
            <div className="float-left">
              <PrevNextLast onClick={onNext} className="prevnext"><i className="fa fa-angle-right"></i></PrevNextLast>
            </div>
            <div className="clearfix" />
          </FlexContainer>
        ) : null }
      </div>
    );
  }
}

Pagination.propTypes = {
  meta: PropTypes.shape({
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
  }),
  onPageChange: PropTypes.func.isRequired,
  position: PropTypes.string,
};

export default Pagination;
