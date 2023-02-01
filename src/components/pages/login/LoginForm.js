import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

export default function LoginForm() {

    // state (état, données)
    const [prenom, setPrenom] = useState("")
    const navigate = useNavigate()

    // comportements
    const handleSubmit = (event) => {
        event.preventDefault()
        setPrenom("")
        navigate(`order/${prenom}`)
    }

    const handleChange = (event) => {
        setPrenom(event.target.value)
    }

    // affichage (render)
    return (
        <LoginFormStyled>
            <form action="submit" onSubmit={handleSubmit}>
                <h1>Bienvenue chez nous !</h1>
                <hr />
                <h2>Connectez-vous</h2>
                <input
                    value={prenom}
                    type="text"
                    placeholder="Entrez votre prénom"
                    onChange={handleChange}
                    required
                />
                <button>Accéder à mon espace</button>
            </form>
        </LoginFormStyled>
    )
}

const LoginFormStyled = styled.div`
  background: green;
  text-align: center;
  max-width: 500px;
  max-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  hr{
    border: 1.5px solid orange;
    margin-bottom: 40px;
  }

  h1{
    color:white;
    font-size: 40px;
  }

  h2{
    color:white;
    margin: 20px 10px 10px;
    font-size: 30px;
  }

`;