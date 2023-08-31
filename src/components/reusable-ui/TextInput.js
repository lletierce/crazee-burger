import styled, { css } from "styled-components"
import { theme } from "../../theme"

export default function TextInput({ 
  value, 
  onChange, 
  Icon, 
  className, 
  version="normal", 
  ...extraProps 
}) {
  return (
    <InputStyled className={className} version={version}>
      <div className="icon">{Icon && Icon}</div>
      <input value={value} onChange={onChange} type="text" {...extraProps} />
    </InputStyled>
  )
}

const InputStyled = styled.div`
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;

  .icon {
    display: flex; // to center icon vertically
    margin: 0 13px 0 8px;
    font-size: ${theme.fonts.size.SM};  
  }
  
  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    width: 100%;

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }

  /* ${(props) => {
    if (props.version === "normal") return extraNormalStyle
    if (props.version === "minimalist") return extraMinimalistStyle
  }} */
  ${({ version }) => extraStyle[version]}
`

const extraNormalStyle = css`
  background-color: ${theme.colors.white};
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};

  input{
    color: ${theme.colors.dark};

    &::placeholder{
      background: ${theme.colors.white};
    }
  }
`

const extraMinimalistStyle = css`
  background-color: ${theme.colors.background_white};
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};

  input{
    background: ${theme.colors.background_white};
    color: ${theme.colors.dark};

    &:focus{
      outline: 0;
    }
  }
`

const extraStyle = {
  normal: extraNormalStyle,
  minimalist: extraMinimalistStyle
}