import styled from "styled-components";
export const Container = styled.div`
  flex-direction: column;
  background-color: lightseagreen;
  align-items: center;
  border-radius: 5px;
  margin-top: 0 auto;
  padding-inline: 18px;
  width: 30%;

  padding-top: 24px;
  
  @media (max-width: 750px) {
    width: 24%;
  }
`;
//-Entrada  
export const Header = styled.span`
  align-items: center;
  font-size: 29px;
  font-weight: bold;
  color: blue;
`;
// Saída 
export const HeaderTitle = styled.span`
align-items: center;
 font-size: 29px;
 font-weight: bold;
 color: red;
`;
// Total 
export const Total = styled.span`
align-items: center;
  font-size: 29px;
  font-weight: bold;
  color: black;
`;



