import styled from "styled-components"
import { theme } from "../../../../../../theme"

export default function Loader() {
  return (
    <LoaderStyled>
      <span className="title">Chargement en cours ...</span>
    </LoaderStyled>
  )
}

const LoaderStyled = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    text-align: center;
    font-family: "Amatic SC", cursive;
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.regular};
  }
`
