import styled from "styled-components"
import Me from '../asset/me.png'
import { motion } from 'framer-motion'
import devices from "./Devices"



const Intro = () => {

    
    const IntroDiv = styled(motion.div)`
    position: absolute;
    z-index: 1;
    width: 55vw;
    top: 77%;
    padding-left: 22.47%;
    display: flex;


       
    `
const Underline = styled(motion.div)`
        width: 100%;
        margin: 0;
        padding-bottom: 7px;
        position: relative;
        border-bottom: 2px solid black;
        z-index: 1;

        h1 {
            position: absolute;
            bottom: 15vh;
            color: white;
            font-family: 'Courier New', Courier, monospace;
            font-size: 5rem;
            right: 55%;
            font-weight: 400;
            white-space: nowrap;
            @media ${devices.laptop} { 

                font-size: 4rem;
            }
            @media ${devices.tablet} { 

                font-size: 2rem;
                bottom: 35vh;
                right: 45%;
                }
                @media ${devices.mobileL} { 
        
                    font-size: 1.5rem;
                    right: 55%;

                }
                @media ${devices.mobileL} { 
        
                    font-size: 1.2rem;
                    right: 55%;
                    bottom: 40vh;

                }

        }
        &:before {
                content: '';
                position: absolute;
                background: white;
                height: 2px;
                width: 50%;
                bottom: -2px;
                left: 0;
                @media ${devices.tablet}{
                    background: #000;
                }
        }
        .pic {
        position: absolute;
        left: 70%;
        top: 110%;
        width: 450px;
        height: auto;
        transform: translate(-50%, -99.5%);
        z-index: 200;

        @media ${devices.tablet} { 

            width: 260px;
            height: auto;

            }
        @media ${devices.mobileL} { 
            left: 45%;
            top: 7px;
            width: 180px;
            height: auto;

            }
    }
`
return (
    <IntroDiv
    initial={{width: 0}}
    animate={{width: '55vw'}}
    transition={{type:'spring', duration:1.5, delay:0.5}}>
        
        <Underline
        initial={{opacity: 0}}
        animate={{opacity:1}}
        transition={{duration:2, delay:1}}>
            <h1>CODE <br/>YOU CAN <br/>DEPEND ON. </h1>
            <img class='pic' src={Me} alt="" />
        </Underline>
            
        
    </IntroDiv>
)












}


export default Intro






























/*
import styled from "styled-components"
import Me from '../asset/me.png'

const Box = styled.div`
    width: 55vw;
    height: .2vh;
    display: flex;
    position: absolute;
    padding: 0%;
    margin: 0%;
    left: 50%;
    top: 77%;
    
    background-repeat: no-repeat;
    background-size: 100% 2px;
    background: linear-gradient(
        to right, 
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%); 
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.body};
    z-index: 1;
`
const SubBox = styled.div`
    width: 100%;
    position: relative;
    display: flex;

    .pic {
        position: absolute;
        left: 50%;
        width: 127%;
        height: auto;
        transform: translate(-50%, -99.5%);
    }
`
const Text = styled.div`
    color: white;
    position: absolute;
    right: 10%;
    bottom: 7pc;
    font-size: 2rem;
    transform: rotate(90deg);

`



const Intro = () => {
    return (
        <Box>
            <SubBox/>
            <SubBox>
                <div>
                    <img className="pic" src={Me} alt="My Pic"/>
                </div>
            </SubBox>
        </Box>
    )
}
export default Intro

*/