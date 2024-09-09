import React from 'react'
import styled from 'styled-components';
import NavbarMobile from './NavbarMobile';

export default function ContainerOrderPageMobile() {
  return (
    <ContainerOrderPageMobileStyled>
      <NavbarMobile />
      <div className='toolbar'>toolbar</div>
      <div>menu</div>
    </ContainerOrderPageMobileStyled>
  )
}

const ContainerOrderPageMobileStyled = styled.div`
  background-color: pink;
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  /* align-items: center; */


  .toolbar{
    background-color: lightgreen;
    height: 5vh;
  }
`;