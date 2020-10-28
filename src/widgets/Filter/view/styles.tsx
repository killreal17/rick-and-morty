import styled from 'styled-components';

import {InputProps} from './types';

export const Wrapper = styled.div`
  @media screen and (max-width: 700px) {
    flex: auto;
  }
  width: 500px;
  
  padding: 8px 10px;

  border: solid rgb(65, 163, 83);
  border-width: 3px;
  border-radius: 18px;
`;

export const Input = styled.input<InputProps>`
  outline: none;
  background: none;
  border: 0;
  width: 100%;
  font-size: 20px;
  color: ${props => props.isShownPlaceholder
    ? 'rgb(102, 102, 102)' 
    : 'rgb(0, 0, 0)'};
`;
