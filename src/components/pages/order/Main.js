import styled from "styled-components";

export default function Main() {
  return (
    <MainStyled>Main</MainStyled>
  )
}

const MainStyled = styled.div`
        background: green;
        flex: 1; // or height: calc(95vh - 10vh);
`;