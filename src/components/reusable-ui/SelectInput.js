import React from "react";
import styled from "styled-components";

export default function SelectInput({ options, name,  className, id }) {
  return (
    <SelectInputStyled name={name} className={className} id={id}>
      {options.map(({ value, label}) => (
        <option value={value}>{label}</option>
      ))}
    </SelectInputStyled>
  );
}

const SelectInputStyled = styled.select`
  border: 1px solid red;
`;