import styled from "styled-components";
//Meio
export const Container = styled.div`
  max-width: 1120px;
  margin: 4px auto;
  width: 100%;
  background-color: lightseagreen;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  padding-top: 9px;
  padding-bottom: 9px;

  text-align: center;
  gap: 0px;
  
  @media (max-width: 750px) {
    display: grid;
  }
`;
export const Label = styled.label``;
// Meio Input
export const Input = styled.input`
  text-align: center;
  outline: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid black;
  background-color: beige;
  padding: 6px;

`;
//Meio Letras
export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 21px;
  color: black;
  font-weight: bold ;
  padding-top: 3px;
  padding-bottom: 3px;
  margin-top: -7px;
`;
//Meio Letras
export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  color: black;
  font-size: 20px;
  font-weight: bold;
  
 //Espaçamento meio
  input {
    margin-left: 13px;
    margin-right: 13px;
    accent-color: black;
    margin-top: 0;
   
  }
`;
export const Table = styled.table`
  width: 100%;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  
`;
//Botão
export const Button = styled.button`
  padding: 8px;
  margin: 1px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  color: black;
  border: 2px solid black;
  font-weight: bold;
  background-color: blanchedalmond;
  
 
`;

