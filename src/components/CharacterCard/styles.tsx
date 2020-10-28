import styled from 'styled-components';

import {TextProps} from './types';

export const Wrapper = styled.div`
  display: flex;
  align-items: center; 
  gap: 10px;
  padding: 10px;
  border: solid rgb(35, 102, 41);
  border-radius: 10px;
  transition: 300ms;
  cursor: pointer;
  
  :hover {
    background-color: rgb(5, 89, 14);
    border: solid rgb(42, 115, 50);
  }
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

export const Information = styled.div`
  flex: auto;
  flex-direction: column;
`;

export const Cell = styled.div`
  display: flex;
  padding-top: 2px;
  padding-bottom: 2px;
  gap: 15px;
`;

export const Text = styled.div<TextProps>`
  font-size: ${props => {
    switch(props.size) {
    case 'l':
      return '30px';

    case 'm': 
      return '20px';

    case 's':
      return '17px';

    default: 
      return '20px';
    }
  }};
  color: ${props => props.color || 'rgb(120, 120, 120)'};
`;
