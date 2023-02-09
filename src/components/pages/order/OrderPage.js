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
                <h1>Bonjour {username}</h1>
                <Link to="/">
                    <button>Déconnexion</button>
                </Link>
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
        height: 90vh;
    }
`;
