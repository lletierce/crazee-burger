import styled from "styled-components";
import { theme } from "../../../theme";

export default function Main() {
  return (
    <MainStyled></MainStyled>
  )
}

const MainStyled = styled.div`
        background: ${theme.colors.background_white};
        box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
        flex: 1; // or height: calc(95vh - 10vh);

        border-bottom-left-radius: ${theme.borderRadius.extraRound};
        border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;