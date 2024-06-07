import styled from "styled-components";
//Meio
export const Container = styled.div`
  max-width: 1120px;
  margin: 5px auto;
  width: 100%;
  background-color: lightseagreen;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  padding: 10px 10px;
  gap: 20px;
  text-align: center;
  
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
  padding: 4px 0px;
  font-size: 17px;
  font-weight: bold;
  border: 1px solid #ccc;
  background-color: beige;
  
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
    margin-left: 18px;
    margin-right: 18px;
    accent-color: black;
    margin-top: 0;
   
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
//Botão
export const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: black;
  font-weight: bold;
  background-color: blanchedalmond;
 
`;

