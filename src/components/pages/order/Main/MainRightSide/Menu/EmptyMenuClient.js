import styled from "styled-components"
import { theme } from "../../../../../../theme"

export default function EmptyMenuClient() {
  return (
    <EmptyMenuStyled>
      <span className="title">Victime de notre succès ! :D</span>
      <span className="description">De nouvelles recettes sont en cours de préparation.</span>
      <span className="description">À très vite !</span>
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
`
