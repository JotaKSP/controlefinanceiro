import styled from "styled-components";
// Grid Parte de Baixo)
export const Table = styled.table`

  width: 100%;
  background-color: lightseagreen;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 0px auto;
  font-weight: bold;
  font-size: 15px;
  padding-right: 8px;

`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  
  text-align: center;
  border-bottom: inset;
  border-color: #ccc;
  font-size: 19px;
  color: blue;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;