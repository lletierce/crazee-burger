import { useState } from "react";
import styled from "styled-components";
import {fakeMenu2} from "../../../../fakeData/fakeMenu"

export default function Menu() {

    const [menu, setMenu] = useState(fakeMenu2)    

    return (
        <MenuStyled>
            {menu.map((produit) =>{
                return <div className="produit">{produit.title}</div>
            })}
        </MenuStyled>
    )
}

const MenuStyled = styled.div`
  background: purple;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;

  .produit{
    background: red;
    width: 240px;
    height: 330px;
  }
`;
