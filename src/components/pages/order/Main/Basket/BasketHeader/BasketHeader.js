import { useContext } from "react";
import styled, { css } from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { theme } from "../../../../../../theme";
import { formatPrice } from "../../../../../../utils/maths";
import Header from "../../../../../reusable-ui/Header";
import { calculateSumToPay } from "./helper";
import CasinoEffect from "../../../../../reusable-ui/CasinoEffect";
import { useWindowDimensions } from "react-native-web";

export default function BasketHeader() {

  const { width } = useWindowDimensions(); // TODO : remove duplicate

  const { basket, menu, isBasketVisible, setIsBasketVisible } =
    useContext(OrderContext);

  const sumToPay = calculateSumToPay(basket, menu);
  const handleBasketDisplaying = () => {
    setIsBasketVisible(!isBasketVisible);
  };

  return (
    <Header>
      <BasketHeaderStyled width={width}>
        <span className="total">Total</span>
        <CasinoEffect count={formatPrice(sumToPay)} />
        {width <= theme.breakpoints.screen.md && <div  className="reduce-basket-icon" onClick={handleBasketDisplaying}>{"<"}</div>}
      </BasketHeaderStyled>
    </Header>
  );
}

const BasketHeaderStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.primary};
  font-family: "Amatic SC", cursive;
  
  ${({ width}) => width <= theme.breakpoints.screen.md ? fontMobileStyled : fontStyled}

  .reduce-basket-icon{
    cursor: pointer;
  }
`;

const fontStyled = css`
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.bold};
  letter-spacing: 2px;
`;

const fontMobileStyled = css`
  font-size: ${theme.fonts.size.P3};
  font-weight: ${theme.fonts.weights.bold};
  letter-spacing: 1px;

  .reduce-basket-icon{
    &:hover {
      color: ${theme.colors.white};
    }
  }
`;