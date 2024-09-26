import React, { useContext } from "react";
import styled from "styled-components";
import NavbarMobile from "./NavbarMobile";
import OrderContext from "../../../../context/OrderContext";
import Loader from "../Main/MainRightSide/Menu/Loader";
import Basket from "../Main/Basket/Basket";
import Admin from "../Main/MainRightSide/Admin/Admin";
import OrderToolbar from "./OrderToolbar";
import Menu from "../Main/MainRightSide/Menu/Menu";

export default function ContainerOrderPageMobile() {
  const { menu, isModeAdmin, isBasketVisible, setIsBasketVisible } =
    useContext(OrderContext);
  
  // state

  // comportement
  const handleBasketDisplaying = () => {
    setIsBasketVisible(!isBasketVisible);
  };

  // affichage
  if (menu === undefined) return <Loader />; // @TODO : remove duplicate

  return (
    <ContainerOrderPageMobileStyled>
      <NavbarMobile />
      {/* @TODO : Add animations */}
      {!isBasketVisible && <OrderToolbar  onClick={handleBasketDisplaying}/>}
      {isBasketVisible && (<div className="lateral-panel"><Basket /></div>)}
      <Menu />
      {isModeAdmin && <Admin />}
    </ContainerOrderPageMobileStyled>
  );
}

const ContainerOrderPageMobileStyled = styled.div`
  background-color: pink;
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;

  .lateral-panel {
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    height: 90vh;
    width: 50vw;
    background-color: yellow;
    margin-top: 61px;
  }
`;