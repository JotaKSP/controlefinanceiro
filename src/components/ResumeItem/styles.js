// Cabeçalho
import styled from "styled-components";
export const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightseagreen;
  border-radius: 5px;
  padding: 0 17px;
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
  width: 50%;
  gap: 10px;
  margin: 0 auto;
  text-align: center;

//Tamanho-Setas
  svg {
    width: 25px;
    height: 25px;
  }
`;
//Tamanho = Entrada - saída - Total
export const HeaderTitle = styled.p`
 font-size: 24px;
 margin: 10px auto;
 height: 25px;

`;
// Valor R$
export const Total = styled.span`
  font-size: 30px;
  font-weight: bold;
  
`;

