/**
*
* Breadcumb
*
*/

import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';

const BreadcumbCol = styled(Col)`
  color: #bdc3c7;
  font-size: 12px;
  line-height: 62px;
`;

const A = styled.a`
  color: #bdc3c7;
  font-size: 12px;
  line-height: 62px;
`;

const Wrapper = styled.div`
  background-color: #ecf0f1;
`;


class Breadcumb extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Container>
          <Row>
            <BreadcumbCol>
              <A>Breadcumb</A>
            </BreadcumbCol>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

Breadcumb.propTypes = {

};

export default Breadcumb;
