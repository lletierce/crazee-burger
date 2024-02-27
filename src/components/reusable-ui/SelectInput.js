import React from "react"
import styled from "styled-components"
import { theme } from "../../theme"

export default function SelectInput({
  options,
  value,
  name,
  Icon,
  className,
  onChange,
  ...restProps
}) {
  return (
    <SelectInputStyled className={className}>
      {Icon && <div className="icon">{Icon}</div>}
      <select name={name} value={value} onChange={onChange} {...restProps}>
        {options.map(({ optionValue, label }) => (
          <option key={label} value={optionValue}>
            {label}
          </option>
        ))}
      </select>
    </SelectInputStyled>
  )
}

const SelectInputStyled = styled.div`
  /* border: 1px solid yellow; */
  background-color: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 8px 16px;

  .icon {
    /* border: 1px solid red; */
    font-size: ${theme.fonts.P1};
    margin-right: 13px;
    color: ${theme.colors.greyBlue};
    display: flex; // centre verticalement l'icône dans le champ select
  }

  select {
    /* border: 1px solid blue; */
    background: ${theme.colors.background_white};
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 100%;
    outline: 0;
  }
` // commente/décommente une ligne CSS pour connaître son effet sur le composant

// Attention à deux props "value":
// 1️⃣ value dans <select/> (valeur selectionnée) ==> onChange est lié à cette value
// 2️⃣ value dans <option/> (valeur disponible)
// const options = [
//   { optionValue: "", label: "", selected: true },
//   { optionValue: "", label: "", selected: false },
// ]