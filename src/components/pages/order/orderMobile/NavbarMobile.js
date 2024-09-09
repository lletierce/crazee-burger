import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";
import ToggleSmallButton from "../../../reusable-ui/ToggleSmallButton";
import { refreshPage } from "../../../../utils/window";
import LogoTextless from "../../../reusable-ui/LogoTextless";
import Profile from "../Navbar/Profile";
import { theme } from "../../../../theme";

export default function NavbarMobile() {
  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext);

  const displayToastNotification = () => {
    console.log("displayToastNotification");
    setIsModeAdmin(!isModeAdmin);
  };

  return (
    <NavbarMobileStyled>
      <ToggleSmallButton
        isChecked={isModeAdmin}
        labelIfUnchecked="ACTIVER ADMIN"
        labelIfChecked="DÉSACTIVER ADMIN"
        onToggle={displayToastNotification}
      />
      <LogoTextless
        className="logo-order-page-mobile"
        onClick={() => refreshPage()}
      />
      {/* <div>profile</div> */}
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
