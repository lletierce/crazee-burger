import styled from "styled-components"
import Total from "./Total"
import Footer from "./Footer"
import EmptyBasket from "./EmptyBasket"
import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext"
import BasketProducts from "./BasketProducts"
import { theme } from "../../../../../theme"
import { isEmpty } from "../../../../../utils/array"

export default function Basket() {
  const { basket } = useContext(OrderContext)

  return (
    <BasketStyled>
      <Total />
      {isEmpty(basket) ? <EmptyBasket /> : <BasketProducts />}
      <Footer />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  height: 85vh;

  .head {
    position: sticky;
    top: 0;
  }

  .footer {
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    position: sticky;
    bottom: 0;
  }
`
