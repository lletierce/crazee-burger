import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
// import Logo from "src/components/reusable-ui/Logo.js"
import Logo from "../../reusable-ui/Logo"
import { theme } from "../../../theme";

export default function Navbar({ username }) {
    return (
        <NavbarStyled>
            <Logo />
            <NavbarRightSide username={username}/>
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
        background: ${theme.colors.white};
        height: 10vh;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        /* align-items: center; */

        border-top-left-radius: ${theme.borderRadius.extraRound};
        border-top-right-radius: ${theme.borderRadius.extraRound};
`;