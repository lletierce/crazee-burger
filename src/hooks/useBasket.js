import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"
import { deepClone, filter, find, findIndex } from "../utils/array"

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY)

  const handleAddToBasket = (productToAdd) => {
    const basketCopy = deepClone(basket)
    const isProductAlreadyInBasket = find(productToAdd.id, basketCopy) !== undefined

    // 1er cas : le produit n'est pas déjà dans le basket
    if (!isProductAlreadyInBasket) {
      createNewProductInBasket(productToAdd, basketCopy, setBasket)
      return
    }
    // 2ème cas : le produit est déjà dans le basket
    incrementProductAlreadyInBasket(productToAdd, basketCopy)
  }

  const incrementProductAlreadyInBasket = (productToAdd, basketCopy) => {
    const indexOfBasketProductToIncrement = findIndex(productToAdd.id, basketCopy)
    basketCopy[indexOfBasketProductToIncrement].quantity += 1
    setBasket(basketCopy)
  }

  const createNewProductInBasket = (productToAdd, basketCopy, setBasket) => {
    const newBasketProduct = {
      ...productToAdd,
      quantity: 1,
    }
    const basketUpdated = [newBasketProduct, ...basketCopy]
    setBasket(basketUpdated)
  }

  const handleDeleteBasketProduct = (idBasketProduct) => {
    //1. copy du state (optional because filter returns a new array )
    const basketCopy = deepClone(basket)

    //2. manip de la copie state
    //const basketUpdated = basketCopy.filter((product) => product.id !== idBasketProduct)
    const basketUpdated = filter(idBasketProduct, basketCopy)

    //3. update du state
    setBasket(basketUpdated)
  }

  return { basket, handleAddToBasket, handleDeleteBasketProduct }
}
