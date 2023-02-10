import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";

export default function Navbar({ username }) {
    return (
        <NavbarStyled>
            <div className="left-side">Left</div>
            <NavbarRightSide username={username}/>
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
        background: blue;
        height: 10vh;
        display: flex;
        justify-content: space-between;
        /* align-items: center; */

        .left-side{
            background: pink;
        }
`;