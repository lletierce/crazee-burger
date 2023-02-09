import styled from 'styled-components';
import { theme } from '../../theme';

export default function Input({ value, onChange, Icon, ...otherProps }) {
  return (
    <LogoStyled>
      {Icon && Icon}
      <input
        value={value}
        onChange={onChange}
        type="text"
        {...otherProps}
      />
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
    
    background-color: ${theme.colors.background_white};
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;
    
    .icon{
        font-size: ${theme.fonts.size.P0};
        margin-right: ${theme.spacing.xs};
        color: ${theme.colors.greySemiDark};
    }

    input{
        border: none;
        font-size: ${theme.fonts.size.P0};
        color: ${theme.colors.dark};

    &::placeholder{
        background: ${theme.colors.white};
        color: ${theme.colors.greyMedium};
    }
  }

`;
