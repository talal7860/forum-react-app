import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'reactstrap';
import Input from 'components/Input';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

const InputDiv = styled.div`
  width: 85%;
`;

const SearchInput = styled(Input)`
  border: none;
  box-shadow: none;
  background-color: #f3f5f9;
  color: #363838;
  font-size: 14px;
  padding: 8px 19px;
  height: 38px;
`;

const SearchBtn = styled(Button)`
  border: solid 1px #697683;
  box-shadow: none;
  background-color: #697683;
  color: #ffffff;
  font-size: 18px
`;

const SearchForm = ({ handleSubmit, pristine, submitting }) => (
  <Form onSubmit={handleSubmit}>
    <InputDiv className="float-left">
      <Field
        name="q"
        component={SearchInput}
        type="text"
        placeholder="Search Topics"
      />
    </InputDiv>
    <div className="float-right">
      <SearchBtn type="submit" disabled={pristine || submitting}>
        <FontAwesome name="search" />
      </SearchBtn>
    </div>
  </Form>
);

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
};


export default reduxForm({
  form: 'search-form', // a unique identifier for this form
})(SearchForm);
