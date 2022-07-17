import styled, { css } from "styled-components"
import { useState } from "react"
const MainContainer = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
` 

const Flex = styled.div`
    height: 100%;
    width: 80%;
    justify-content: space-between;
    align-items: center;
    display: flex;
    position: absolute;
`


const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    width: 25%;
    margin-left: auto;
    margin-right: auto;
    transition: transform 1.4s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 #000000d8;
    position: relative;
    color: black;
    transition: transform 1.2s;
    transform-style: preserve-3d;
    border-radius: 50px;
    z-index: 1000;
    opacity: ${(props) => (props.hover ? "calc(100%)" : "calc(40%)")};

    &.flipped {
        transform: rotateY(180deg);
    }
`

const cardSide = css`
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: #fff;
    backface-visibility: hidden;
    border-radius: 50px;

`
const ProjectFrontSide = styled.div`
    ${cardSide}
`
const ProjectBackSide = styled.div`
    ${cardSide}
    transform: rotateY(-180deg);

`


const ProjectCardComponent = () => {
    const [hover, setHover] = useState(false)
    
    const [hover2, setHover2] = useState(false)
    
    const [hover3, setHover3] = useState(false)
    const handlerHover = () => {
        setHover(!hover)
    }
    const handlerHover2 = () => {
        setHover2(!hover2)
    }
    const handlerHover3 = () => {
        setHover3(!hover3)
    }
    return (
        <MainContainer>
            <Flex>
            <Card onMouseEnter={()=>{handlerHover()}} onMouseLeave={()=>{handlerHover()}} hover={hover}>
                <ProjectFrontSide>

                </ProjectFrontSide>
                <ProjectBackSide>
                    
                </ProjectBackSide>
            </Card>
            <Card onMouseEnter={()=>{handlerHover2()}} onMouseLeave={()=>{handlerHover2()}} hover={hover2}>
                <ProjectFrontSide>

                </ProjectFrontSide>
                <ProjectBackSide>
                    
                </ProjectBackSide>
            </Card>
            <Card onMouseEnter={()=>{handlerHover3()}} onMouseLeave={()=>{handlerHover3()}} hover={hover3}>
                <ProjectFrontSide>

                </ProjectFrontSide>
                <ProjectBackSide>
                    
                </ProjectBackSide>
            </Card>
        </Flex>
        </MainContainer>
    )
}

export default ProjectCardComponent