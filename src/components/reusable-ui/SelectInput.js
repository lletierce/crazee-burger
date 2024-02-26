import React from "react";
import styled from "styled-components";

export default function SelectInput({ value, options, name,  className, id, onChange }) {
  return (
    <SelectInputStyled value={value} name={name} className={className} id={id} onChange={onChange}>
      {options.map(({ value, label}) => (
        <option key={label} value={value}>{label}</option>
      ))}
    </SelectInputStyled>
  );
}

const SelectInputStyled = styled.select`
  border: 1px solid red;
`;

// Attention à deux props "value":
// 1️⃣ value dans <select/> (valeur selectionnée) ==> onChange est lié à cette value
// 2️⃣ value dans <option/> (valeur disponible)
// const options = [
//   { optionValue: "", label: "", selected: true },
//   { optionValue: "", label: "", selected: false },
// ]