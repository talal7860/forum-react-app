import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import styled from 'styled-components';
import { Form, Button, Col, Row } from 'reactstrap';
import Input from 'components/Input';
import PropTypes from 'prop-types';
import { required } from 'utils/validations';

const PostInfoBot = styled.div`
  border-top: solid 1px #f1f1f1;
  line-height: 50px;
  padding: 0 30px 0 115px;
`;

const TopicNewForm = ({ handleSubmit, pristine, submitting }) => (
  <Form onSubmit={handleSubmit}>
    <Row>
      <Col md="4">
        <Field
          name="title"
          component={Input}
          type="text"
          placeholder="Title"
          label="Title"
          validate={[required]}
        />
      </Col>
      <Col md="8">
        <Field
          name="description"
          component={Input}
          type="textarea"
          placeholder="Description"
          label="Description"
          validate={[required]}
        />
      </Col>
    </Row>
    <PostInfoBot>
      <Row>
        <Col>
          <Button color="primary" className="float-right" type="submit" disabled={pristine && submitting}>Create</Button>
        </Col>
      </Row>
    </PostInfoBot>
  </Form>
);

TopicNewForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
};


export default reduxForm({
  form: 'new-topic', // a unique identifier for this form
})(TopicNewForm);

