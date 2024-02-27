import { useState } from "react"
import { fakeMenu } from "../fakeData/fakeMenu"
import { deepClone } from "../utils/array"
import { syncBothMenus } from "../api/product"

export const useMenu = () => {
  const [menu, setMenu] = useState()

  // comportements (gestionnaire de state ou "state handlers")
  const handleAdd = (newProduct, username) => {
    // 1. copie du tableau
    const menuCopy = deepClone(menu)

    // 2. manip de la copie du tableau
    const menuUpdated = [newProduct, ...menuCopy]

    // 3. update du state
    setMenu(menuUpdated)
    syncBothMenus(username, menuUpdated)
  }

  const handleDelete = (idOfProductToDelete, username) => {
    //1. copy du state
    const menuCopy = deepClone(menu)

    //2. manip de la copie state
    const menuUpdated = menuCopy.filter((product) => product.id !== idOfProductToDelete)
    console.log("menuUpdated: ", menuUpdated)

    //3. update du state
    setMenu(menuUpdated)
    syncBothMenus(username, menuUpdated)
  }

  const handleEdit = (productBeingEdited, username) => {
    // 1. copie du state (deep clone)
    const menuCopy = deepClone(menu)

    // 2. manip de la copie du state
    const indexOfProductToEdit = menu.findIndex(
      (menuProduct) => menuProduct.id === productBeingEdited.id
    )
    menuCopy[indexOfProductToEdit] = productBeingEdited

    // 3. update du state
    setMenu(menuCopy)
    syncBothMenus(username, menuCopy)
  }

  const resetMenu = (username) => {
    setMenu(fakeMenu.LARGE)
    syncBothMenus(username, fakeMenu.LARGE)
  }

  return { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu }
}
