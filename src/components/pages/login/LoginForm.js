import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { IoChevronForward } from "react-icons/io5"
import { BsPersonCircle } from "react-icons/bs"
import TextInput from "../../reusable-ui/TextInput"
import Button from "../../reusable-ui/Button"
import { theme } from "../../../theme"
import { authenticateUser } from "../../../api/user"
import Welcome from "./Welcome"

export default function LoginForm() {
  // state
  const [username, setUsername] = useState("Bob")
  const navigate = useNavigate()

  // comportements
  const handleSubmit = async (event) => {
    event.preventDefault()
    const userReceived = await authenticateUser(username)
    setUsername("")
    navigate(`order/${userReceived.username}`)
  }

  const handleChange = (event) => {
    setUsername(event.target.value)
  }

  // affichage
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <Welcome />
      <div>
        <TextInput
          value={username}
          onChange={handleChange}
          placeholder={"Entrez votre prénom"}
          required
          Icon={<BsPersonCircle />}
          className="input-login"
          version="minimalist"

        />

        <Button label={"Accéder à mon espace"} Icon={<IoChevronForward />} />
      </div>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  margin: 0px auto;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom: ${theme.gridUnit * 5}px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
  }

  h2 {
    margin: ${theme.spacing.md} ${theme.spacing.sm} ${theme.spacing.sm};
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P3};
  }

  .input-login {
    margin: ${theme.spacing.md} 0; // must be handled in Parent
  }

  @media screen and (min-width: ${theme.breakpoints.screen.sm}px) {
    min-width: 400px;
    max-width: 600px;

    h1 {font-size: ${theme.fonts.size.P5};}

    h2 {font-size: ${theme.fonts.size.P4};}
  }

  @media screen and (min-width: ${theme.breakpoints.screen.md}px) {
    min-width: 500px;
    max-width: 700px;
  }
`
