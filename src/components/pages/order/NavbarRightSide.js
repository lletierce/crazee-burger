import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavbarRightSide({ username }) {
    return (
        <NavbarRightSideStyled>
            Right
            <h1>Bonjour {username}</h1>
            <Link to="/">
                <button>Déconnexion</button>
            </Link>
        </NavbarRightSideStyled>
    )
}

const NavbarRightSideStyled = styled.div`
    background: purple;
`;
