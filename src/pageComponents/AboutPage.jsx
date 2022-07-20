import Layout from "../components/Layout"
import Atom from "../asset/whiteatom.svg"
import styled, {css} from "styled-components"
import Man from '../asset/BlackManInYellow.svg'

const Yellow = css`
    background-color: #fbb034;
    background-image: linear-gradient(315deg, #fbb034 0%, #ffdd00 74%);
    height: 100%;
    width: 100%;
    box-shadow: 0 4px 8px 0 #000000d8;
    z-index: 0;
    position: absolute;
    
    
`
const YellowDiv = styled.div`
    ${Yellow}
    h1 {
        color: white;
        position: absolute;
        font-size: 90px;
        word-spacing: -10px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        right: 7%;
        top: 10%;
    }
`
const BlackDiv = styled.div`
    background-color: #000000;
    background-color: #2d3436;
    background-image: linear-gradient(315deg, #2d3436 0%, #181818 74%);
    height: 110%;
    width: 100%;
    top: 34%;
    box-shadow: 0 4px 8px 0 #000000d8;
    z-index: 1;
    position: absolute;
    transform: skewY(20deg);
`
const MainComponent = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100vh;
    overflow: hidden;
    position: relative;

    width: 100vw;
    background-color: #34495e;
        h2, h3, h4, h5, h6 {
        font-family: 'Karla', sans-serif;
        font-weight: 500;
        }
        
`
const AboveAll = styled.div`
    z-index: 2;
`
const Avatar = styled.img`
    z-index: 100000000000;
    position: absolute;
    left: 10%;
    top: 40%;

`

const YellowBox = styled.div`
    ${Yellow}
    z-index: 1;
    height: 35%;
    width: 35%;
    bottom: 15%;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    h2, h3, h4, h5, h6 {
        font-family: 'Karla', sans-serif;
        font-weight: 500;
        color:white;
        }
`
const AboutPage = () => {

    return (
        <>
            <MainComponent>
                <AboveAll>
                    <Layout atomLink={Atom} allColors={true}/>
                </AboveAll>
                <YellowDiv>
                    <h1>Hey, I'm Kent</h1>
                </YellowDiv>
                <BlackDiv/>
                <Avatar src={Man} alt="hi" height={300} width={300}/>
                <YellowBox>
                    <h3>I make beautiful websites that strive <br/> to serve the needs of each client.
                    I consider <br/> myself a very structured and focused person <br/> with  a passion for problem solving. I try to put<br/> as 
                    much thought and effort into any and <br/> everything I do.

</h3>
                </YellowBox>
            </MainComponent>
            
        
        </>
    )
} 

export default AboutPage