import Layout from "../components/Layout"
import Atom from "../asset/blueatom.svg"
import styled from "styled-components"
import WaveyBackground from "../components/WaveyBackground"
import BallComponent from "../components/BallComponent"
import ProjectCardComponent from '../components/ProjectCardComponent'

const MainComponent = styled.div`
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color: #34495e;
        h2, h3, h4, h5, h6 {
        font-family: 'Karla', sans-serif;
        font-weight: 500;
        }
`

const WorkPage = () => {

    return (
        <MainComponent>
            
            <ProjectCardComponent/>
            <BallComponent/>
            <Layout atomLink={Atom} allColors={true}/>
            <WaveyBackground/>
        </MainComponent>
    )
} 

export default WorkPage