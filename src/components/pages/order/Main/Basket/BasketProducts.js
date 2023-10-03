import React from "react"
import styled from "styled-components"
import { IMAGE_COMING_SOON } from "../../../../../enums/product"
import BasketCard from "./BasketCard"

export default function BasketProducts({ basket, isModeAdmin, handleDeleteBasketProduct }) {
  const handleOnDelete = (id) => {
    handleDeleteBasketProduct(id)
  }

  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => (
        <div className="basket-card" key={basketProduct.id}>
          <BasketCard
            {...basketProduct}
            imageSource={basketProduct.imageSource ? basketProduct.imageSource : IMAGE_COMING_SOON}
            onDelete={() => handleOnDelete(basketProduct.id)}
            isModeAdmin={isModeAdmin}
          />
        </div>
      ))}
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
