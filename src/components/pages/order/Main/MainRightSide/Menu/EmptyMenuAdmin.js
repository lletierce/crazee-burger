import styled from "styled-components"
import { theme } from "../../../../../../theme"
import Button from "../../../../../reusable-ui/Button"

export default function EmptyMenuAdmin({ onReset }) {
  return (
    <EmptyMenuStyled>
      <span className="title">Le menu est vide ?</span>
      <span className="description">Cliquez ci-dessous pour le réinitialiser</span>
      <Button label={"Générer de nouveaux produits"} onClick={onReset} />
    </EmptyMenuStyled>
  )
}

const EmptyMenuStyled = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; // permet de diminuer la largeur du bouton resetMenu

  .title,
  .description {
    text-align: center;
    font-family: "Amatic SC", cursive;
    color: ${theme.colors.greyBlue};
  }

  .title {
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.semiBold};
  }

  .description {
    font-size: ${theme.fonts.size.P4};
    margin-top: 20px;
  }

  button {
    margin-top: 30px;
    font-size: ${theme.fonts.size.XS};
    width: auto;
  }
`
