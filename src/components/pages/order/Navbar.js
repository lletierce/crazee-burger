import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
// import Logo from "src/components/reusable-ui/Logo.js"
import Logo from "../../reusable-ui/Logo"

export default function Navbar({ username }) {
    return (
        <NavbarStyled>
            <Logo />
            <NavbarRightSide username={username}/>
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
        background: blue;
        height: 10vh;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        /* align-items: center; */
`;