import styled from "styled-components"
import BasketHeader from "./BasketHeader/BasketHeader"
import BasketFooter from "./BasketFooter"
import { theme } from "../../../../../theme"
import BasketBody from "./BasketBody/BasketBody"

export default function Basket() {
  return (
    <BasketStyled>
      <BasketHeader />
      <BasketBody />
      <BasketFooter />
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
