import styled from 'styled-components';
import { theme } from "../../theme"


export default function LogoTextless({ className, onClick }) {
  return (
    <LogoTextlessStyled className={className} onClick={onClick}>
        <img src="/images/logo-orange.png" alt="logo-crazee-burger" />
    </LogoTextlessStyled>
  )
}

const LogoTextlessStyled = styled.div`
  display: flex;
  align-items: center;

  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px; // for Safari and Firefox
    margin: 0 ${theme.gridUnit / 2}px;
  }

`;
