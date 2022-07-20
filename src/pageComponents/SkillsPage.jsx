import VideoBackground from "../components/VideoBackground"
import CyberWorld from '../asset/video.mp4'
import styled from "styled-components"
import SkillCardComponent from "../components/SkillCardComponent"
import Layout from "../components/Layout"
import AtomSVG from '../asset/greenatom.svg'




   //////////////////////STYLED COMP SECTION////////////////////////////////


const MainComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    margin: 0px;
    padding: 0px;
    
        h2, h3, h4, h5, h6 {
        font-family: 'Karla', sans-serif;
        font-weight: 500;
        }
`
const SkillsPage = () => {

    //////////////////////COMPONENT USAGE SECTION////////////////////////////////
    return (
        <MainComponent>
            <VideoBackground src={CyberWorld}/>
            <SkillCardComponent/>
            <Layout atomLink={AtomSVG} allColors={true}/>
        </MainComponent>
    )
} 

export default SkillsPage