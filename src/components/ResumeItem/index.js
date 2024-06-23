import React from "react";
import * as C from "./styles";

const ResumeItem = ({ income,expense,total }) => {
  return (

    <C.Container>

      <C.Header>
      
      <span><C.Header>{income}</C.Header></span>
      
      <span><C.HeaderTitle>{expense}</C.HeaderTitle></span>
      
      <span><C.Total>{total}</C.Total></span>

      </C.Header>      

    </C.Container>
    

)}

export default ResumeItem;