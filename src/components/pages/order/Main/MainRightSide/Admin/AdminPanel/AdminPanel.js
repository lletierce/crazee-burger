import { useContext } from "react"
import styled from "styled-components"
import OrderContext from "../../../../../../../context/OrderContext"
import { theme } from "../../../../../../../theme"
import { getTabSelected, tabsConfig } from "../tabsConfig"

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext)

  const tabs = tabsConfig
  const tabSelected = getTabSelected(tabs, currentTabSelected)

  return <AdminPanelStyled>{tabSelected && tabSelected.Content}</AdminPanelStyled>
}

const AdminPanelStyled = styled.div`
  height: 240px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  box-sizing: border-box; // ajouter ça sinon ça fait grossir le panel
  padding: 30px 5%; // ajouter au panel et non dans les form car sinon on va devoir le mettre dans les deux form : AddForm et EditForm
  // les 5% c'est pour les aligner avec le tab.
`
