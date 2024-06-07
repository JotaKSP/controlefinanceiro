// Cabeçalho
import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightseagreen;
  border-radius: 5px;
  padding: 0 16px;
  width: 30%;

  @media (max-width: 750px) {
    width: 23%;

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
  gap: 10px;
  margin: 0 auto;
  text-align: center;

//Tamanho-Setas
  svg {
    width: 30px;
    height: 30px;
  }
`;
//Tamanho = Entrada - saída - Total
export const HeaderTitle = styled.p`
 font-size: 0px;
 font-weight: bold;
 margin: 10px auto;
 height: 24px;

`;
// Valor R$
export const Total = styled.span`
  font-size: 30px;
  font-weight: bold;
  align-items: center;
  
`;

