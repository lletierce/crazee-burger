import React, { useContext } from "react";
import styled from "styled-components";
import { FaShoppingBasket } from "react-icons/fa";
import { formatPrice } from "../../../../utils/maths";
import { theme } from "../../../../theme";
import OrderContext from "../../../../context/OrderContext";
import { calculateSumToPay } from "../Main/Basket/BasketHeader/helper";
import { fadeInFromRight } from "../../../../theme/animations";

export default function OrderToolbar({ onClick }) {
  const { basket, menu } = useContext(OrderContext);

  const sumToPay = calculateSumToPay(basket, menu);

  return (
    <OrderToolbarStyled>
      <div className="icon-basket" onClick={onClick}>
        <FaShoppingBasket />
      </div>
      <div className="price">{formatPrice(sumToPay)}</div>
    </OrderToolbarStyled>
  );
}

const OrderToolbarStyled = styled.div`
  background: ${theme.colors.background_dark};
  height: 8vh;

  display: flex;
  align-items: center;
  padding-left: ${theme.spacing.md};
  column-gap: ${theme.spacing.md};

  box-shadow: ${theme.shadows.strong};

  .icon-basket {
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      color: ${theme.colors.primary};
    }

    transform: scale(1.5);
  }

  .price {
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.family.stylish};
    font-weight: ${theme.fonts.weights.bold};
  }

  animation: ${fadeInFromRight} ease-out ${theme.animations.speed.slow};
`;