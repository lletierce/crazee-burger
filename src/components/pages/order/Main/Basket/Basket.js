import styled from "styled-components"
import Total from "./Total"
import { formatPrice } from "../../../../../utils/maths"
import Footer from "./Footer"
import BasketBody from "./BasketBody"

export default function Basket() {
  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />
      <BasketBody />
      <Footer />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;
`
