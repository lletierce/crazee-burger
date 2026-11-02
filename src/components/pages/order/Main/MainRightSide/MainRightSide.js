import styled from "styled-components"
import { theme } from "../../../../../theme"
import Menu from "./Menu/Menu"

export default function MainRightSide() {

  return (
    <MainRightSideStyled>
      <Menu />
      {/* {isModeAdmin && <Admin />} */}
    </MainRightSideStyled>
  )
}

const MainRightSideStyled = styled.div`
  position: relative;
  overflow-y: hidden;
  display: grid;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`
