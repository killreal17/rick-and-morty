import styled from 'styled-components';

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
