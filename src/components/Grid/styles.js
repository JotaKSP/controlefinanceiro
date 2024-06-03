import styled from "styled-components";
// Grid Parte de Baixo)
export const Table = styled.table`
  width: 100%;
  background-color: lightseagreen;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  font-weight: bold;
  font-size: 15px;
  margin: 8px auto;

`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  border-bottom: inset;
  padding-bottom: 2px;
  font-size: 18px;
  color: blue;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;