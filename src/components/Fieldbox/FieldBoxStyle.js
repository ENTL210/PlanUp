import styled from "styled-components";
import {motion} from "framer-motion";


const Wrapper = styled.div`
border: #DADCE0 1px solid;
position: relative;
width: 50%;
display: flex;
align-items:center;
justify-item: center;
border-radius: 5px;
`

const Input = styled.input`
font-family: 'Source Sans 3', sans-serif;
border: 0;
background: none;
width: 100%;
padding: 12px;
`

const Placeholder = styled(motion.div)`
font-family: 'Source Sans 3', sans-serif;
position: absolute;
color: rgba(0, 0, 0, 0.4);
font-weight: 600;
margin: 0px 10px;
font-size: 1rem;
`

export {
Wrapper,
Placeholder,
Input
}