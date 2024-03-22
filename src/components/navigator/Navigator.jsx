import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import {motion} from "framer-motion"

const Nav = styled(motion.a)`
color: ${props => props.fgColor};
font-family: 'Source Sans 3', sans-serif;
cursor: pointer;
padding: 5px;
border-radius: 5px;
`


function Navigator({fgColor, label, path, hoverFgColor}) {
    const navigate = useNavigate()
    return (
        <Nav
        fgColor={fgColor}
        onClick={() => {
            navigate(path)
        }}
        initial={{
            background: "none",
            color: fgColor
        }}
        whileHover={{
            backgroundColor: "rgb(146,154,171, 0.5)",
            color: hoverFgColor
        }}
        transition={{
            ease: "easeInOut",
            duration: 0.2
        }}
        >
            {label}
        </Nav>
    )
}

export default Navigator;