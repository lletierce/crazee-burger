import styled from "styled-components"
import Profile from "./Profile"

export default function NavbarRightSide() {
  
  return (
    <NavbarRightSideStyled>
      <Profile />
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
`
