import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function CardStretched() {
  return (
    <CardStretchedStyled>
      <div className="card">
        <div>text-info</div>
        <div>image</div>
      </div>
    </CardStretchedStyled>
  );
}

const CardStretchedStyled = styled.div`
  background: orange;
  padding: 10px;

  .card {
    background: ${theme.colors.white};
    box-sizing: border-box;
    height: 90px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    /* column-gap: 30px; */
  }
`;
