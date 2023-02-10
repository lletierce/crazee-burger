import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export default function OrderPage() {

    // state (état, données)
    const { username } = useParams()

    // comportements

    // affichage (render)
    return (
        <OrderPageStyled>
            <div className="container">
                <div className="navbar">
                    navbar
                    <h1>Bonjour {username}</h1>
                    <Link to="/">
                        <button>Déconnexion</button>
                    </Link>
                </div>
                <div className="main">
                    main
                </div>
            </div>
        </OrderPageStyled>
    )
}

const OrderPageStyled = styled.div`
    background: orange;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .container{
        background: red;
        width: 1400px;
        height: 95vh;
        display: flex;
        flex-direction: column;
    }

    .navbar{
        background: blue;
        height: 10vh;
    }

    .main{
        background: green;
        flex: 1; // or height: calc(95vh - 10vh);
    }
`;
