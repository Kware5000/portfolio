import styled from "styled-components"
import devices from "./Devices"
const MainContainer = styled.div`
    height: 100%;
    width: 100%;
`
const Blue = styled.div`
    width: 100%;
    height: 390px;
    background: linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);

    @media ${devices.desktop} {
        height: 800px;
    }


`
const Wave = styled.div`
    fill: #34495e;
    padding-top: 200px;
    width: 1900px;
    @media ${devices.desktop} {
        padding-top: 400px;
        width: 6000px;
    }
    @media ${devices.tablet} {
        padding-top: 270px;
        width: 1200px;
    }
    @media ${devices.mobileL} {
        padding-top: 350px;
        width: 590px;
    }
    
`

const WaveyBackground = () => {
    return (
    <MainContainer>
        <Blue>
            <Wave>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
            </svg>
            </Wave>
        </Blue>
        
    </MainContainer>

    )
}

export default WaveyBackground