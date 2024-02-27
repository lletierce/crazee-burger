import React from "react";
import styled from "styled-components";
import TextInput from "../../../../../../../reusable-ui/TextInput";
import SelectInput from "../../../../../../../reusable-ui/SelectInput";
import ImagePreview from "./ImagePreview";
import { getInputTextsConfig, getSelectsInputConfig } from "./inputConfig";
import { Inputs } from "./Inputs";

const Form = React.forwardRef(
  ({ product, onSubmit, onChange, onFocus, onBlur, children }, ref) => {
    // state (vide)

    // comportements (vide)

    // affichage
    return (
      <FormStyled onSubmit={onSubmit}>
        <ImagePreview imageSource={product.imageSource} title={product.title} />
        <Inputs product={product} onChange={onChange} onFocus={onFocus} onBlur={onBlur} ref={ref} />
        <div className="form-footer">{children}</div>
      </FormStyled>
    );
  }
);

export default Form;

const FormStyled = styled.form`
  /* border: 2px solid black; */
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .form-footer {
    /* background: green; */
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;
  }
`;