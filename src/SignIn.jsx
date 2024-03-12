import styled from "styled-components";
import { motion } from "framer-motion";
import FieldBox from "./components/fieldbox/Fieldbox.jsx";
import { useState } from "react";

const PageContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #eeeeee;
min-height: 100vh;
`

const AuthContainer = styled.div`
width: 95%;
height: 50%;
background: rgb(247,247,247);
max-width: 450px;
max-height: 800px;
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
border: solid #DADCe0 1px;
box-shadow: 3px 4px 4px rgba(0,0,0, 0.25);
border-radius: 5px;
flex-wrap: wrap;
`

const Header = styled.div`
display: flex;
flex-direction: column;
width: 50%;
margin-bottom: 20px;
`

const Text = styled.a`
    font-family: 'Source Sans 3', sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
`

const SmallText = styled.a`
    font-family: 'Source Sans 3', sans-serif;
    font-weight: 500;
    font-size: 1rem
`

function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <PageContainer>
            <AuthContainer>
                <Text>Login</Text>
                <FieldBox value={email} setValue={(val) => setEmail(val)} placeholder={"Email"}/> 
                <FieldBox value={password} setValue={(val) => setPassword(val)} placeholder={"Password"}/> 
            </AuthContainer>
        </PageContainer>
    )
}

export default SignIn