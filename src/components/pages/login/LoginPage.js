import Logo from "../../reusable-ui/Logo"
import LoginForm from "./LoginForm"
import styled from 'styled-components';

export default function LoginPage() {
    

    // affichage (render)
    return (
        <LoginPageStyled>
            <Logo />
            <LoginForm />
        </LoginPageStyled>
    )
}

const LoginPageStyled = styled.div`
  background: red;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;