import styled from "styled-components";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import Profile from "./Profile";

export default function NavbarRightSide({ username }) {
    return (
        <NavbarRightSideStyled>
            <ToggleButton
                labelIfUnchecked="ACTIVER LE MODE ADMIN"
                labelIfChecked="DÉSACTIVER LE MODE ADMIN"
            />
            <Profile username={username} />
        </NavbarRightSideStyled>
    )
}

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;
`;