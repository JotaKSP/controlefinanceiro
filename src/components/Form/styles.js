import styled from "styled-components";
//Meio
export const Container = styled.div`
  max-width: 1120px;
  margin: 10px auto;
  width: 98%;
  background-color: lightseagreen;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  padding: 15px 0px;
  gap: 10px;
  text-align: center;

  @media (max-width: 750px) {
    display: grid;
  }
`;
export const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  
`;
//Meio Letras
export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 17px;
  color: blue;
`;
//Meio Letras
export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  color: blue;

 //Espaçamento meio
  input {
    margin-left: 60px;
    accent-color: black;
    margin-top: 0;
  }
`;
export const Label = styled.label``;
// Meio Input
export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid #ccc;
`;
//Botão
export const Button = styled.button`
  padding: 2px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  color: black;
  background-color: blanchedalmond;
  font-size: 15px;
`;

