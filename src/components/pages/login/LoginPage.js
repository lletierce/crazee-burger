import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import LoginForm from "./LoginForm";
import { theme } from "../../../theme";

export default function LoginPage() {
  return (
    <LoginPageStyled>
        <Logo className={"logo-login-page"} />
        <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: ${theme.spacing.sm};

  background: url("/images/burger-and-fries-background.jpg") rgba(0, 0, 0, 0.7);
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;

  .logo-login-page {
    transform: scale(1.4);
    margin-top: -168px; // can't use negative value from design system (string..)
  }

  @media screen and (min-width: ${theme.breakpoints.screen.sm}) {
    row-gap: ${theme.spacing.lg};

    .logo-login-page {
      transform: scale(2);
      max-width: 500px;
    }
  }

  @media screen and (min-width: ${theme.breakpoints.screen.md}) {
    row-gap: ${theme.spacing.xl};

    .logo-login-page {
      transform: scale(3);
      max-width: 600px;
    }
  }
`;