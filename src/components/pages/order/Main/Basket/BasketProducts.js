import React from "react"
import { useContext } from "react"
import styled from "styled-components"
import { IMAGE_COMING_SOON } from "../../../../../enums/product"
import BasketCard from "./BasketCard"
import OrderContext from "../../../../../context/OrderContext"
import { findObjectById } from "../../../../../utils/array"
import { checkIfProductIsClicked } from "../MainRightSide/Menu/helper"

export default function BasketProducts() {
  const {
    username,
    basket,
    isModeAdmin,
    handleDeleteBasketProduct,
    menu,
    handleProductSelected,
    productSelected,
  } = useContext(OrderContext)

  const handleOnDelete = (event, id) => {
    event.stopPropagation()
    handleDeleteBasketProduct(id, username)
  }

  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => {
        const menuProduct = findObjectById(basketProduct.id, menu)
        return (
          <div className="basket-card" key={basketProduct.id}>
            <BasketCard
              {...menuProduct}
              imageSource={menuProduct.imageSource ? menuProduct.imageSource : IMAGE_COMING_SOON}
              quantity={basketProduct.quantity}
              onDelete={(event) => handleOnDelete(event, basketProduct.id)}
              isClickable={isModeAdmin}
              onClick={isModeAdmin ? () => handleProductSelected(basketProduct.id) : null}
              isSelected={checkIfProductIsClicked(basketProduct.id, productSelected.id)}
            />
          </div>
        )
      })}
    </BasketProductsStyled>
  )
}

const BasketProductsStyled = styled.div`
  /* border: 1px solid red; */
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .basket-card {
    /* border: 1px solid blue; */
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
    :first-child {
      margin-top: 20px;
      /* border: 1px solid red; */
    }
    :last-child {
      margin-bottom: 20px;
    }
  }
`
