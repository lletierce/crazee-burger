import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main";
import Navbar from "./Navbar";

export default function OrderPage() {

    // state (état, données)
    const { username } = useParams()

    // comportements

    // affichage (render)
    return (
        <OrderPageStyled>
            <div className="container">
                <Navbar username={username} />
                <Main />
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
        border-radius: ${theme.borderRadius.extraRound};
    }
`;
