import styled, { keyframes } from "styled-components"
import LogoComponent from "../components/LogoComponent"
import SocialIcons from "../components/SocialIcons"
import { NavLink } from "react-router-dom"
import Atom from "../components/Atom"
import AtomSVG from '../asset/atom.svg'
import { useState } from "react"
import Intro from "../components/Intro"
import Watermark from '../components/Watermark'
import devices from "../components/Devices"

const MainContainer = styled.div`
    background: #ecf0f1;
    width: 100vw;
    height: 100vh;
    position: relative;
    z-index: 0;

    h2, h3, h4, h5, h6 {
        font-family: 'Karla', sans-serif;
        font-weight: 500;
    }
    
`
const Container = styled.div`
    padding: 2rem;
`
export const SkillsLink = styled(NavLink)`
    
    position: absolute;
    top: 50%;
    right: calc(1rem + 2vw);
    text-decoration: none;
    transform:rotate(90deg) translate(-50%, -50%);
    z-index: 1;    
    font-size: 18px;
    font-family: 'Karla', sans-serif;
    color: ${props => props.firstPage ? 'black' : 'white'};
    @media ${devices.tablet} {
        color: ${props => props.click ? props.theme.body : props.theme.text};
    }
    @media ${devices.mobileL} { 
        
        font-size: 15px;
    
    }
    
`
export const WorkLink = styled(NavLink)`
    color: ${props => props.click ? props.theme.body : props.theme.text};
    position: absolute;
    top: 43.3%;
    left: 2rem;
    text-decoration: none;
    transform:rotate(-90deg) translate(-50%, -50%);
    z-index: 1;    
    font-size: 18px;
    font-family: 'Karla', sans-serif;
    @media ${devices.tablet}{
        color: ${props => props.smColor}
    }
    @media ${devices.mobileL} { 
        
        font-size: 15px;
    
    }
`
export const BottomLinks = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    font-size: 20px;
    @media ${devices.mobileL} { 
        
        font-size: 15px;
    
    }
`
export const ContactLink = styled(NavLink)`
    color: ${props => props.click ? props.theme.body : props.theme.text};
    text-decoration: none;
    z-index: 1;    
    @media ${devices.tablet}{
        color: ${props => props.smColor}
    }
`
export const AboutLink = styled(NavLink)`
    color: ${props => props.click ? props.theme.body : props.theme.text};
    text-decoration: none;
    z-index: 1;
    @media ${devices.tablet}{
        color: ${props => props.smColor}
    }
`
const rotate = keyframes`
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
`
const StartButton = styled.button`
    position: absolute;
    top: ${props => props.click ? '85%' : '50%'};
    left: ${props => props.click ? '92%' : '50%'};
    transform: translate(-50%, -50%);
    border: none;
    outline: none;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 900ms ease;
    font-size: ${props => props.click ? '0px' : '.8rem'};


    &>:first-child{
        animation: ${rotate} infinite 2.3s linear;
        padding: 1rem;
    }
`
const RedDiv = styled.div`
    position: absolute;
    background: linear-gradient(to right, #ff416c, #ff4b2b);
    top: 0;
    bottom: 0;
    right: 50%;
    height: ${props => props.click ? '100%' : '0%'};
    width: ${props => props.click ? '50%' : '0%'};
    transition: height 0.5s ease, width 1s ease 0.5s;
    z-index: 1;
    @media ${devices.tablet}{
        height: ${props => props.click ? '310px' : '0%'};
        width: ${props => props.click ? '100%' : '0%'};
        right: 0%;
        z-index: -1;

    }
`

export const Main = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <MainContainer>
            <Container>
                <LogoComponent click={click}/>
                <SocialIcons click={click} filter={'none'}/>
                <RedDiv click={click}/>

                <StartButton click={click}>
                    <Atom  src={AtomSVG} onClick={()=> handleClick()} width={click ? 120 : 150} smWidth={click ? "70px" : "100px"}/>
                    <span>Click Here!</span>
                </StartButton>
                <SkillsLink to="/skills" click={click} smColor="white" firstPage={true}>
                    <h3>
                        Skills
                    </h3>
                </SkillsLink>
                <WorkLink to="/works" click={click}>
                    <h3>
                        Works
                    </h3>
                </WorkLink>
                <BottomLinks>
                    <ContactLink to='/contact' click={click} smColor="black">
                        Contact
                    </ContactLink>
                    <AboutLink to='/about'>
                        About
                    </AboutLink>
                </BottomLinks>
            </Container>
            {click ? <Intro/> : null}
            <Watermark text='Kent' top='3%' left='55%' smTop='15%'  smLeft='55%' click={click}/>
            <Watermark text='Ware' top='30%' left='65%' smTop='25%'  smLeft='66%' click={click}/>

        </MainContainer>
    )
} 

export default Main