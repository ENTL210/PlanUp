import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import FieldBox from "./components/Fieldbox/Fieldbox.jsx";
import Navigator from "./components/Navigator/Navigator.jsx";
import Button from "./components/Button/Button.jsx";

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

const ForgotPassContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`


function Signin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <PageContainer>
            <Header>Login</Header>
            <AuthContainer>
                <FieldBox value={email} type={"text"} setValue={(val) => setEmail(val)} placeholder={"Email"} />
                <FieldBox value={password} type={"password"} setValue={(val) => setPassword(val)} placeholder={"Password"} />
                <ForgotPassContainer>
                    <Navigator
                        label={"Forgot Password?"}
                        fgColor={"#F67474"}
                        hoverFgColor={"#db6969"}
                        path={"/"}
                    />
                </ForgotPassContainer>
                <Button
                    bgColor={"#F67474"}
                    fgColor={"#FFFFFF"}
                    label={"Login"}
                    hoverBgColor={"#db6969"}
                    length={"50%"}
                />
                <Navigator
                label={"Create Account"}
                fgColor={"#F67474"}
                hoverFgColor={"#db6969"}
                path={"/signup"}
                />
            </AuthContainer>
        </PageContainer>
    )
}

export default Signin