import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function LoginForm() {

    // state (état, données)
    const [prenom, setPrenom] = useState("")

    // comportements
    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Bonjour ${prenom}`)
        setPrenom("")
    }

    const handleChange = (event) => {
        setPrenom(event.target.value)
    }

    // affichage (render)
    return (
        <div>
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
                <Link to="/order">Vers OrderPage</Link>
            </form>
        </div>
    )
}
