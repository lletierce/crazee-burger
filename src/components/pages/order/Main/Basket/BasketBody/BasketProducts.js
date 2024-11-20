import React from "react";
import { useContext } from "react";
import styled, { css } from "styled-components/macro";
import {
  BASKET_MESSAGE,
  IMAGE_COMING_SOON,
} from "../../../../../../enums/product";
import BasketCard from "./BasketCard";
import OrderContext from "../../../../../../context/OrderContext";
import { findObjectById } from "../../../../../../utils/array";
import { checkIfProductIsClicked } from "../../MainRightSide/Menu/helper";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { basketAnimation } from "../../../../../../theme/animations";
import { formatPrice } from "../../../../../../utils/maths";
import { convertStringToBoolean } from "../../../../../../utils/string";
import Sticker from "../../../../../reusable-ui/Sticker";
import { useWindowDimensions } from "react-native-web";
import { theme } from "../../../../../../theme";

export default function BasketProducts() {
  const {
    username,
    basket,
    isModeAdmin,
    handleDeleteBasketProduct,
    menu,
    handleProductSelected,
    productSelected,
  } = useContext(OrderContext);

  const { width } = useWindowDimensions(); // @TODO : remove duplicate


  const handleOnDelete = (event, id) => {
    event.stopPropagation();
    handleDeleteBasketProduct(id, username);
  };

  return (
    <TransitionGroup
      component={BasketProductsStyled}
      className={"transition-group"}
      width={width}
    >
      {basket.map((basketProduct) => {
        const menuProduct = findObjectById(basketProduct.id, menu);
        return (
          <CSSTransition
            appear={true}
            classNames={"animation-basket"}
            key={basketProduct.id}
            timeout={300}
          >
            <div className="card-container">
              {convertStringToBoolean(menuProduct.isPublicised) && (
                <Sticker className="badge-new" />
              )}
              <BasketCard
                {...menuProduct}
                imageSource={
                  menuProduct.imageSource
                    ? menuProduct.imageSource
                    : IMAGE_COMING_SOON
                }
                quantity={basketProduct.quantity}
                onDelete={(event) => handleOnDelete(event, basketProduct.id)}
                isClickable={isModeAdmin}
                onClick={
                  isModeAdmin
                    ? () => handleProductSelected(basketProduct.id)
                    : null
                }
                isSelected={checkIfProductIsClicked(
                  basketProduct.id,
                  productSelected.id
                )}
                className={"card"}
                price={
                  convertStringToBoolean(menuProduct.isAvailable)
                    ? formatPrice(menuProduct.price)
                    : BASKET_MESSAGE.NOT_AVAILABLE
                }
              />
            </div>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

const BasketProductsStyled = styled.div`
  background: ${theme.colors.background_white};
  
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;  

  .card-container {
    /* border: 1px solid blue; */
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
    position: relative;
    :first-child {
      margin-top: 20px;
      /* border: 1px solid red; */
    }
    :last-child {
      margin-bottom: 20px;
    }

    .badge-new {
      position: absolute;
      z-index: 1;
      bottom: 10%;
      left: 21%;
      transform: translateY(-21%);
      transform: translateX(-5%);
    }
  }
  ${({ width}) => width <= theme.breakpoints.screen.md && mobileStyled}

  ${basketAnimation}
`;

const mobileStyled = css`
  .card-container .badge-new {
    bottom: 25%;
  }
`;