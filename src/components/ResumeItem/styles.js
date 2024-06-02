// Cabeçalho
import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: darkturquoise;
  border-radius: 5px;
  width: 30%;
  padding:  15px;
  padding-top: 0px;
  padding-bottom: 0px;
 

  @media (max-width: 750px) {
    width: 20%;

    p {
      font-size: 12px;
    }

    span {
      font-size: 2px;
    }

    svg {
      display: none;
    }
  }
`;
//Setas-Entrada - saída - Total
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60%;
  gap: 10px;

//Color-Setas
  svg {
    width: 28px;
    height: 28px;
  }
`;
//Entrada - saída - Total
export const HeaderTitle = styled.p`
  font-size: 25px;
`;
// Valor R$
export const Total = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

