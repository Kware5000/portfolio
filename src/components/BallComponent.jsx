import styled, { keyframes } from "styled-components"
import devices from "./Devices"
const bounce = keyframes`
    from {
        transform: translateX(0px);
    }
    to {
        transform: translateX(calc(100vw - 10vmin));
    }
`

const bounceA = keyframes`
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(calc(100vh - 10vmin));
    }
`
const Ball = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0 0 40px 15px #e5e8eb;
    animation: ${bounce} 1s ease-in 0s infinite alternate;
    @media ${devices.tablet} {
        height: 25px;
        width: 25px;
    }
`
const MainContainer = styled.div`
    animation: ${bounceA} 680ms linear 0s infinite alternate;
`




const BallComponent = () => {
    return (
        <MainContainer>
            <Ball/>
        </MainContainer>
    )
}


export default BallComponent