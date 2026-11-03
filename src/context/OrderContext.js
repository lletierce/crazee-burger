import { createContext } from "react";

export default createContext({
  username: "",

  menu: [],

  basket: [],
  handleAddToBasket: () => {},
  handleDeleteBasketProduct: () => {},

  isBasketVisible: false,
  setIsBasketVisible: () => {},
});