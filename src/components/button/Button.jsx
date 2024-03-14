import React from "react";
import { Container, Label } from "./ButtonStyle";

function Button({bgColor, fgColor, label, onClicked}) {
    return (
        <Container 
            bgColor={bgColor}
            whileHover={{
                cursor: "pointer"
            }}
        >
            <Label>{label}</Label>
        </Container>
    )
}

export default Button