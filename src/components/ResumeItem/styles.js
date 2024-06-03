// Cabeçalho
import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightseagreen;
  border-radius: 5px;
  padding: 5px 15px;
  width: 30%;

  @media (max-width: 750px) {
    width: 20%;

    p {
      font-size: 12px;
    }

    span {
      font-size: 20px;
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
  width: 80%;
  gap: 10px;
  margin: 1px auto;
  text-align: center;
  
//Color-Setas
  svg {
    width: 25px;
    height: 25px;
  }
`;
//Entrada - saída - Total
export const HeaderTitle = styled.p`
  font-size: 20px;

`;
// Valor R$
export const Total = styled.span`
  font-size: 30px;
  font-weight: bold;

`;

