import styled from "styled-components";
import {motion} from "framer-motion";

function Authentication() {
    const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    `

    const Header = styled.div`
    font-family: 'Source Sans 3', sans-serif;
    font-weight: 700;
    font-size: 2rem;
    width: 100%;
    `

    const AuthContainer = styled.div`
    width: 50%;
    height: 50%;
    max-width: 1100px;
    max-height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid #DADCe0 1px;
    box-shadow: 3px 4px 4px rgba(0,0,0, 0.25);
    `

    

    return (
        <>
         <Container>
            <Header>PlanUp</Header>
            <AuthContainer>
                Signup
            </AuthContainer>
         </Container>
        </>
    )
}

export default Authentication