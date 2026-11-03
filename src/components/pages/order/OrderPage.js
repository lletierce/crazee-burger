import { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import OrderContext from "../../../context/OrderContext";
import { useMenu } from "../../../hooks/useMenu";
import { useBasket } from "../../../hooks/useBasket";
import { useParams } from "react-router-dom";
import { initialiseUserSession } from "./helpers/initialiseUserSession";
import burger_bg from "../../../assets/images/Burger-and-fries-background.jpg";

import { useWindowDimensions } from "react-native-web";
import ContainerOrderPageMobile from "./orderMobile/ContainerOrderPageMobile";

export default function OrderPage() {
  // state
  const [isBasketVisible, setIsBasketVisible] = useState(false);
  const { menu, setMenu } = useMenu();
  const { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct } =
    useBasket();
  const { username } = useParams();
  const { width } = useWindowDimensions();


  useEffect(() => {
    initialiseUserSession(username, setMenu, setBasket);
  }, [username, setMenu, setBasket]);

  const orderContextValue = {
    username,
    menu,
    isBasketVisible,
    setIsBasketVisible,
    basket,
    handleAddToBasket,
    handleDeleteBasketProduct,
  };

  //affichage (render)
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        {width > theme.breakpoints.screen.md ? (
          <div className="container">
            <Navbar />
            <Main />
          </div>
        ) : (
          <ContainerOrderPageMobile />
        )}
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  background: url(${burger_bg}) rgba(0, 0, 0, 0.5);
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;

  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    /* background: red; */
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;