import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <Menu />
    </MainStyled>
  )
}

const MainStyled = styled.div`
        background: ${theme.colors.background_white};
        flex: 1; // or height: calc(95vh - 10vh);

        border-bottom-left-radius: ${theme.borderRadius.extraRound};
        border-bottom-right-radius: ${theme.borderRadius.extraRound};
        box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

        display: grid;
        grid-template-columns: 1fr;
        // this code will be use for Basket
        /* grid-template-columns: 25% 1fr; // or 25% 75% or 25% 50% */

        overflow-y: scroll;
        
        /* .basket{
          background: pink;
        } */
`;