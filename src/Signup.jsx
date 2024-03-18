import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import FieldBox from "./components/fieldbox/Fieldbox.jsx";
import Navigator from "./components/navigator/Navigator.jsx";
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


function Signup() {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [comfirmedPassword, setConfirmedPassword] = useState("")

    return (
        <PageContainer>
            <Header>Sign Up</Header>
            <AuthContainer>
                <FieldBox value={fullName} setValue={(val) => setFullName(val)} placeholder={"Full Name"} />
                <FieldBox value={email} setValue={(val) => setEmail(val)} placeholder={"Email"} />
                <FieldBox value={password} type={"password"} setValue={(val) => setPassword(val)} placeholder={"Password"} />
                <FieldBox value={comfirmedPassword} type={"password"} setValue={(val) => setConfirmedPassword(val)} placeholder={"Confirm Password"} />
                <Button
                    bgColor={"#F67474"}
                    fgColor={"#FFFFFF"}
                    label={"Login"}
                    hoverBgColor={"#db6969"}
                    length={"50%"}
                />
                <Navigator
                    label={"Sign In"}
                    fgColor={"#F67474"}
                    hoverFgColor={"#db6969"}
                    path={"/signin"}
                />
            </AuthContainer>
        </PageContainer>
    )
}

export default Signup