import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from '../../reusable-ui/TextInput';

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
        <LoginFormStyled action="submit" onSubmit={handleSubmit}>
            <div >
                <h1>Bienvenue chez nous !</h1>
                <hr />
                <h2>Connectez-vous</h2>
            </div>
            <TextInput 
                value={prenom} 
                onChange={handleChange} 
                placeholder={"Entrez votre prénom"}
                required
                Icon={<BsPersonCircle className='icon' />}
            />
            <button className='button-with-icon'>
                <span>Accéder à mon espace</span>
                <IoChevronForward className='icon' />
            </button>
        </LoginFormStyled>
    )
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 800px;
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