import styled from 'styled-components';

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
    
    background-color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;
    
    .icon{
        font-size: 15px;
        margin-right: 8px;
        color: gray;
    }

    input{
        border: none;
        font-size: 15px;
        color: black;
    }

    &::placeholder{
        background: white;
        color: lightgray;
    }
`;
