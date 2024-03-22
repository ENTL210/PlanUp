import {motion} from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.div)`
display: flex;
width: ${props => props.length};
align-items: center;
justify-content: center;
background: ${props => props.bgColor};
border-radius: 5px;
`
const Label = styled.a`
font-family: 'Source Sans 3', sans-serif;
color: ${props => props.fgColor};
padding: 10px;
`

export {
Container,
Label
}