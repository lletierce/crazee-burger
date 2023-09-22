import React from "react"
import styled from "styled-components"
import { theme } from "../../theme"

export default function Header({ children }) {
  return <HeaderStyled>{children}</HeaderStyled>
}

const HeaderStyled = styled.div`
  height: 70px;
  background: ${theme.colors.background_dark};
  padding: 0 16px;
`
