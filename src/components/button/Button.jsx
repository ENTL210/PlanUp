import React from "react";
import { Container, Label } from "./ButtonStyle";

function Button({ bgColor, hoverBgColor, fgColor, label, length, onClicked }) {
    return (
        <Container
            bgColor={bgColor}
            initial={{
                background: bgColor
            }}
            whileHover={{
                cursor: "pointer",
                background: hoverBgColor
            }}
            length={length}
        >
            <Label
                fgColor={fgColor}
            >
                {label}
            </Label>
        </Container>
    )
}

export default Button