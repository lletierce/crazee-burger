import React from "react"
import styled from "styled-components"
import { theme } from "../../theme"

export default function Sticker({ label = "new", className }) {
  return <StickerStyled className={className}>{label}</StickerStyled>
}

const StickerStyled = styled.span`
  font-size: ${theme.fonts.size.XXXS};
  padding: 1em;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${theme.colors.redSecondary};
  border: none;
  color: white;
  text-transform: uppercase;
`
