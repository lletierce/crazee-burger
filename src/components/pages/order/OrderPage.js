import { useState } from "react"
import styled from "styled-components"
import { theme } from "../../../theme"
import Main from "./Main/Main"
import Navbar from "./Navbar/Navbar"
import OrderContext from "../../../context/OrderContext"
import { fakeMenu } from "../../../fakeData/fakeMenu"
import { EMPTY_PRODUCT } from "./Main/MainRightSide/Admin/AdminPanel/AddForm"

export default function OrderPage() {
  // state
  const [isModeAdmin, setIsModeAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState("add")
  const [menu, setMenu] = useState(fakeMenu.MEDIUM)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)

  // comportements
  const handleAdd = (newProduct) => {
    // 1. copie du tableau
    const menuCopy = [...menu]

    // 2. manip de la copie du tableau
    const menuUpdated = [newProduct, ...menuCopy]

    // 3. update du state
    setMenu(menuUpdated)
  }

  const handleDelete = (idOfProductToDelete) => {
    //1. copy du state
    const menuCopy = [...menu]

    //2. manip de la copie state
    const menuUpdated = menuCopy.filter((product) => product.id !== idOfProductToDelete)
    console.log("menuUpdated: ", menuUpdated)

    //3. update du state
    setMenu(menuUpdated)
  }

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM)
  }

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAdd,
    handleDelete,
    resetMenu,
    newProduct,
    setNewProduct,
  }

  //affichage
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  )
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`
