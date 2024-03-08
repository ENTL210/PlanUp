import styled from "styled-components";
import {motion} from "framer-motion";

const PageContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #eeeeee;
min-height: 100vh;
`

const AuthContainer = styled.div`
width: 65%;
height: 50%;
max-width: 1000px;
max-height: 800px;
display: flex;
align-items: center;
gap: 5px;
border: solid #DADCe0 1px;
box-shadow: 3px 4px 4px rgba(0,0,0, 0.25);
border-radius: 5px;
`

const SignInContainer = styled.div`
display: flex;
flex-direction: column;
width: 50%;
justify-content: flex-end;
`

const Description = styled.div`
display: flex;
flex-direction: column;
width: 50%;
padding: 10px
`

const Text = styled.a`
    font-family: 'Source Sans 3', sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
`

const SmallText = styled.a`
    font-family: 'Source Sans 3', sans-serif;
    font-weight: 500;
    font-size: 0.8rem
`

export {
    PageContainer, 
    AuthContainer, 
    SignInContainer,
    Description,
    Text,
    SmallText,

}