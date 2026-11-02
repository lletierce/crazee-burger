import styled from "styled-components";
import { refreshPage } from "../../../../utils/window";
import LogoTextless from "../../../reusable-ui/LogoTextless";
import Profile from "../Navbar/Profile";
import { theme } from "../../../../theme";

export default function NavbarMobile() {
 
  return (
    <NavbarMobileStyled>
      <LogoTextless
        className="logo-order-page-mobile"
        onClick={() => refreshPage()}
      />
      <Profile className={"profile-order-page-mobile"} />
    </NavbarMobileStyled>
  );
}

const NavbarMobileStyled = styled.div`
  background: ${theme.colors.white};
  height: 10vh;
  padding: 0 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  border-bottom: 1px solid ${theme.colors.greyLight};

  .logo-order-page-mobile {
  }

  .profile-order-page-mobile {
    padding-left: 0;
    max-width: 130px;
    font-size: 10px;

    // TODO : Manage username too loong (text-overflow?)
    .info {
      /* background-color: red; */
    }
  }
`;