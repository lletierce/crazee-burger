import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import {BsPersonCircle} from "react-icons/bs";
import {IoChevronForward} from "react-icons/io5";

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
                <div className='input-with-icon'>
                    <BsPersonCircle className='icon' />
                    <input
                        value={prenom}
                        type="text"
                        placeholder="Entrez votre prénom"
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className='button-with-icon'>
                    <span>Accéder à mon espace</span>
                    <IoChevronForward className='icon'/>
                </button>
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

  .input-with-icon{
    /* border: 1px solid red; */
    background-color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;
    
    .icon{
        font-size: 15px;
        margin-right: 8px;
        color: gray;
    }

    input{
        border: none;
        font-size: 15px;
        color: black;
    }

    &::placeholder{
        background: white;
        color: lightgray;
    }
  }

  .button-with-icon{
    width: 100%;
    border: 1px solid red;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;

    padding: 18px 24px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 800;
    color: white;
    background-color: orange;
    border: 1px solid orange;

    &:hover:not(:disabled){
        background-color: white;
        color: orange;
        border: 1px solid orange;
        transition: all 200ms ease-out;
    }

    &:active{
        color: white;
        background-color: orange;
        border: 1px solid orange;
    }

    &:disabled{
        opacity: 0.6;
        cursor: not-allowed;
    }

    .icon{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        margin-left: 10px;
    }
  }
`;