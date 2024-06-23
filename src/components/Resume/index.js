import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./styles";

const Resume = ({income, expense, total }) => {
  return (

    <C.Container>
    <h1><i class="icon bi-arrow-up-circle-fill"></i></h1>
    <ResumeItem income={income} />
    
    <h1><i class="icon1 bi-arrow-down-circle-fill"></i></h1>
    <ResumeItem expense={expense} />
    
    <h1><i class="icon2 bi-currency-dollar"></i></h1>
    <ResumeItem total={total} />

  
    </C.Container>

  );
};

export default Resume;


//<i class="bi-arrow-up-circle-fill"></i>

//{item.expense ? (
//<FaRegArrowAltCircleDown color="red" />
