import styled from "styled-components";
import { motion } from "framer-motion";
import FieldBox from "./components/fieldbox/Fieldbox.jsx";
import { useState } from "react";
import Button from "./components/button/Button.jsx";

const PageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #eeeeee;
min-height: 100vh;
`


const Header = styled.div`
    font-family: 'Source Sans 3', sans-serif;
    font-weight: 500;
    font-size: 3rem;
    padding: 10px;
    margin: 20px;
`

const AuthContainer = styled.div`
width: 100%;
max-width: 450px;
max-height: 800px;
padding: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
border-radius: 5px;
flex-wrap: wrap;
`


function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <PageContainer>
            <Header>Login</Header>
            <AuthContainer>
                <FieldBox value={email} setValue={(val) => setEmail(val)} placeholder={"Email"} type={""}/>
                <FieldBox value={password} setValue={(val) => setPassword(val)} placeholder={"Password"} />
                <Button 
                    bgColor={"#F67474"} 
                    fgColor={"#FFFFFF"} 
                    label={"Login"}
                />
            </AuthContainer>
        </PageContainer>
    )
}

export default SignIn