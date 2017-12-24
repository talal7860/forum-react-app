import styled from 'styled-components';
import { Button } from 'reactstrap';

const StartButton = styled(Button)`
  height: 38px;
  border: none;
  box-shadow: none;
  color: #ffffff;
  font-size: 14px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #1abc9c;
  &:hover {
    background-color: #1abc9c;
    border: none;
    box-shadow: none;
  }
  cursor: pointer;
`;

export default StartButton;

