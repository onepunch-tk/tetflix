import {Outlet} from "react-router-dom"
import Header from "./components/Header";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
`;

function Root() {
    return (
        <>
            <Header/>
            <Wrapper>
                <Outlet/>
            </Wrapper>
        </>
    )
}

export default Root
