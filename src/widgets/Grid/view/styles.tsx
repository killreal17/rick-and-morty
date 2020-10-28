import styled from 'styled-components';

import {TextProps} from './types';

export const Grid = styled.div`
  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr); 
  }
  padding: 20px 20px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  overflow-y: auto;
`;

export const Header = styled.div`
  padding: 30px;
  padding: 30px;
`;

export const Text = styled.div<TextProps>`
  font-size: ${props => {
    switch(props.size) {
    case 'l':
      return '40px';

    case 'm': 
      return '20px';

    default: 
      return '20px';
    }
  }};
  color: ${props => props.color || 'rgb(209, 209, 209)'};
`;
