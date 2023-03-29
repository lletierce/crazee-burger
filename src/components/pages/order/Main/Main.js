import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <div className="menu-and-admin">
        <Menu />
        <div className="admin">Admin</div>
      </div>
    </MainStyled>
  )
}

const MainStyled = styled.div`
        border: 1px solid green;
        background: ${theme.colors.background_white};
        flex: 1; // or height: calc(95vh - 10vh);

        border-bottom-left-radius: ${theme.borderRadius.extraRound};
        border-bottom-right-radius: ${theme.borderRadius.extraRound};
        box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

        display: grid;
        /* grid-template-columns: 25% 1fr; // or 25% 75% or 25% 50% */
        grid-template-columns: 1fr;
        
        /* .basket{
          background: pink;
        } */

        .menu-and-admin{
          position: relative;
          overflow: hidden;
          display: grid;
          border-bottom-left-radius: ${theme.borderRadius.extraRound};
          border-bottom-right-radius: ${theme.borderRadius.extraRound};

          .admin{
          background: red;
          height: 250px;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
        }
        }
`;