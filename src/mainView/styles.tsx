import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  padding: 10px 20px;
  display: flex;
`;

export const Grid = styled.div`
  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(2, auto); 
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, auto); 
  }
  padding: 20px 20px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, auto);
  overflow-y: auto;
`;
