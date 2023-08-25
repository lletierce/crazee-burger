import React, { useContext } from "react"
import styled from "styled-components"
import Tab from "../../../../reusable-ui/Tab"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { theme } from "../../../../../theme"
import OrderContext from "../../../../../context/OrderContext"
import { tabsConfig } from "./tabsConfig"

export default function AdminTabs() {
  const { isCollapsed, setIsCollapsed, currentTabSelected, setCurrentTabSelected } =
    useContext(OrderContext)

  const selectTab = (tabSelected) => {
    setIsCollapsed(false) // ouvre moi le panel dans tous les cas
    setCurrentTabSelected(tabSelected) // réactualise l'onglet sélectionné
  }

  const tabs = tabsConfig

  // affichage
  return (
    <AdminTabsStyled>
      <Tab
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      {tabs.map((tab) => (
        <Tab
          key={tab.index}
          label={tab.label}
          Icon={tab.Icon}
          onClick={() => selectTab(tab.index)}
          className={currentTabSelected === tab.index ? "is-active" : ""}
        />
      ))}
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
  display: flex;

  .is-active {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
    border-bottom: 2px;
  }

  button {
    margin-left: 1px;
  }
`
