import styled from "styled-components";
export const Tr = styled.tr``;

export const Td = styled.td`

  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;
  text-align: center;
  

  svg {
    width: 18px;
    height: 18px;
  }
`;