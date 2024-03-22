import styled from "styled-components";

const Container = styled.div`
font-family: 'Source Sans 3', sans-serif;
width: 100%;
display: flex;
flex-direction: column;
`

const Header = styled.div`
width: 100%;
max-height: 10%;
display: flex;
align-items: center;
justify-content: center;
padding: 5px;
font-weight: 800;
font-size: 1.2rem;
border-bottom: 1px solid #959DAC;
box-sizing: border-box;
`

const Main = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
min-height: 80%;
`

const Menu = styled.div`
width: 25%;
min-height: 100vh;
`

const Calendar = styled.div`
width: 75%;
min-height: 100vh;
background-color: #EEEEEE;
`

export {
    Container, 
    Header,
    Main,
    Menu,
    Calendar

}