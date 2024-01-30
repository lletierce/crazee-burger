import { findObjectById } from "../../../../../../utils/array"

export const calculateSumToPay = (basket, menu) => {
  return basket.reduce((total, basketProduct) => {
    const menuProduct = findObjectById(basketProduct.id, menu)
    if (isNaN(menuProduct.price)) return total
    total += menuProduct.price * basketProduct.quantity
    return total
  }, 0)
}
