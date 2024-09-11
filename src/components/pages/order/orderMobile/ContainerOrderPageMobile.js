import React, { useContext } from "react";
import styled from "styled-components";
import NavbarMobile from "./NavbarMobile";
import OrderContext from "../../../../context/OrderContext";
import { calculateSumToPay } from "../Main/Basket/BasketHeader/helper";
import { formatPrice } from "../../../../utils/maths";
import Loader from "../Main/MainRightSide/Menu/Loader";
import Basket from "../Main/Basket/Basket";
import Admin from "../Main/MainRightSide/Admin/Admin";
import { FaShoppingBasket } from "react-icons/fa";
import { theme } from "../../../../theme";


export default function ContainerOrderPageMobile() {
  const { basket, menu, isModeAdmin, isBasketVisible, setIsBasketVisible } =
    useContext(OrderContext);

  const sumToPay = calculateSumToPay(basket, menu);

  // state

  // comportement
  const handleBasketDisplaying = () => {
    setIsBasketVisible(!isBasketVisible);
  };

  // affichage
  if (menu === undefined) return <Loader />; // TODO : remove duplicate

  return (
    <ContainerOrderPageMobileStyled>
      <NavbarMobile />
      
      {/* TODO : Refacto and Add animations */}
      {!isBasketVisible && (
        <div className="toolbar">
        <div  className="icon-basket" onClick={handleBasketDisplaying}>
          <FaShoppingBasket />
        </div>
        <div className="price">{formatPrice(sumToPay)}</div>
      </div>
      )}
      <div>menu</div>
      {isBasketVisible && (
        <div className="lateral-panel">
          <Basket />
        </div>
      )}
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
  /* align-items: center; */

  .toolbar {
    /* background-color: lightgreen; */
    background: ${theme.colors.background_dark};
    /* color: ${theme.colors.dark}; */
    height: 5vh;

    display: flex;
    align-items: center;
    padding-left: 20px;
    column-gap: 10px;

    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    /* font-family: "Amatic SC", cursive; */

    .icon-basket{
      color: ${theme.colors.white};
      display: flex;
      align-items: center;
      cursor: pointer;


      transform: scale(1.5);

    }

    .price{
      color: ${theme.colors.primary};
      /* font-weight: ${theme.fonts.weights.semiBold}; */
    }
  }

  .lateral-panel {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    height: 90vh;
    width: 50vw;
    background-color: yellow;
    margin-top: 10vh;
  }
`;