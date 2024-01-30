import React, { useContext } from "react"
import styled from "styled-components"
import OrderContext from "../../../../../../context/OrderContext"
import AdminPanel from "./AdminPanel/AdminPanel"
import AdminTabs from "./AdminTabs"
import { fadeInFromBottom } from "../../../../../../theme/animations"
import { theme } from "../../../../../../theme"

export default function Admin() {
  const { isCollapsed } = useContext(OrderContext)

  return (
    <AdminStyled>
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  )
}

const AdminStyled = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  right: 0;

  animation: ${fadeInFromBottom} ease-out ${theme.animations.speed.slow};
`
