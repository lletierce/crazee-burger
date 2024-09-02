import { useState, useContext } from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../theme";
import { basketAnimation } from "../../../theme/animations";
import OrderContext from "../../../context/OrderContext";
import Loader from "./Main/MainRightSide/Menu/Loader";

export default function OrderSmallScreen() {
  // const [isBasketVisible, setIsBasketVisible] = useState(false);
  const { 
    isBasketVisible, 
    setIsBasketVisible,
    menu, 
  } = useContext(OrderContext);

  const basketDisplaying = () => {
    setIsBasketVisible(!isBasketVisible);
  };

  // <div
  //   onClick={basketDisplaying}
  //   className="toggle-basket"
  //   // TODO : Remove with SC
  //   style={isBasketVisible ? { paddingLeft: "20%" } : { paddingLeft: 0 }}
  // >
  //   showBasket
  // </div>;

  // affichage
  if (menu === undefined) return <Loader />;

  return (
    <OrderSmallScreenStyled>
      <div className="navbar">Navbar</div>
      <div className="main">
        {isBasketVisible && <div className="basket">basket</div>}
        <div className="menu">
          <div className="toolbar-menu" style={isBasketVisible ? { paddingLeft: "20%" } : { paddingLeft: 0 }}>
            <div onClick={basketDisplaying}>toggle-basket</div>
            <div>tool-2</div>
          </div>
          <div className="menu-container">
            <ul>
              {menu.map((m, index)=>(
                <li key={index}>{m.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </OrderSmallScreenStyled>
  );
}

const OrderSmallScreenStyled = styled.div`
  ${({ isBasketVisible }) => isBasketVisible && basketVisibleStyle}

  background: pink;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  .navbar {
    height: 10vh;
  }
  .main {
    background-color: lightgreen;
    width: 100%;
    height: 90vh;

    /* display: grid;
    grid-template-columns: 50% 1fr;
    overflow: hidden; */
    position: relative;
    overflow-y: hidden;
    display: grid;

    .basket {
      border: 1px red solid;
      height: 100%;
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;

      ${basketAnimation}
    }

    .toolbar-menu {
      border: 1px orange solid;
      display: flex;
      flex-direction: row;
      column-gap: 10px;
    }

    .menu {
      /* border: 1px blue solid; */
      ${({ isBasketVisible }) => isBasketVisible && basketVisibleStyle}
    }
  }
`;

const basketVisibleStyle = css`
  .toggle-basket {
    padding-left: 100;
  }
`;