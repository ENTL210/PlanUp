import styled from "styled-components";
import { motion } from "framer-motion";
import {
    PageContainer,
    AuthContainer,
    SignInContainer,
    Description,
    Text,
    SmallText
} from "./styles"

function SignIn() {


    return (
        <PageContainer>
            <AuthContainer>
                <Description>
                    <Text>Sign In</Text>
                    <SmallText>Welcome back!</SmallText>
                </Description>
                <SignInContainer>
                    Hello
                </SignInContainer>
            </AuthContainer>
        </PageContainer>
    )
}

export default SignIn