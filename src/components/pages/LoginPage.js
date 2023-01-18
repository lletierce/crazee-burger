import { useState } from "react"

export default function LoginPage() {
    // state (état, données)
    const [prenom, setPrenom] = useState("")

    // comportements
    const handleSubmit = () => {
        alert(`Bonjour ${prenom}`)
    }

    const handleChange = (event) => {
        setPrenom(event.target.value)
    }

    // affichage (render)
    return (
        <div>
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h3>Connectez-vous</h3>
            <form action="submit" onSubmit={handleSubmit}>
                <input
                    value={prenom}
                    type="text"
                    placeholder="Entrez votre prénom..."
                    onChange={handleChange}
                    required
                />
                <button>Accédez à votre espace</button>
            </form>
        </div>
    )
}
