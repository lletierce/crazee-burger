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
                <h1>Bienvenue chez nous!</h1>
                <br />
                <h3>Connectez-vous</h3>
                <input
                    value={prenom}
                    type="text"
                    placeholder="Entrez votre prénom..."
                    onChange={handleChange}
                    required
                />
                <button>Accédez à votre espace</button>
            </form>
        </LoginFormStyled>
    )
}

const LoginFormStyled = styled.div`
  background: green;
`;