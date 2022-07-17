import styled, {keyframes} from "styled-components"
import Atom from "../components/Atom"
import SocialIcons from "../components/SocialIcons"
import LogoComponent from "../components/LogoComponent"
import { ContactLink, AboutLink, WorkLink, SkillsLink, BottomLinks } from "../pageComponents/Main"
import { NavLink } from "react-router-dom"



const rotate = keyframes`
from {
    transform: rotate(0);
}
to {
    transform: rotate(360deg);
}
`


const AtomDiv = styled.div`
    position: absolute;
    z-index: 1;
    top: 72%;
    left: 87%;
    &>:first-child{
    animation: ${rotate} infinite 2.3s linear;
    padding: 1rem;
    }

`
const Home = styled(NavLink)`
    color: ${props => props.click ? props.theme.body : props.theme.text};
    text-decoration: none;
    z-index: 1;
    margin-right: 5%;
    margin-top: 1%;
    font-family: 'Pacifico', cursive;
    font-size: 29px;

`
const TopLinks = styled.div`
    position: absolute;
    top: 1rem;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const Layout = ({atomLink, allColors, Logo, Social, Skills, Work, Bottom, }) => {
    return (
        <div>
            <TopLinks>
                <LogoComponent click={Logo || allColors}/>
                <Home to='/' click={allColors}>Main</Home>
            </TopLinks>
            <SocialIcons click={allColors || Social}/>
            <SkillsLink to='/skills' click={allColors || Skills}>
                <h3>
                    Skills
                </h3>
            </SkillsLink>
            <WorkLink to='/works' click={allColors || Work}>
                <h3>
                    Works
                </h3>
            </WorkLink>
            <BottomLinks>
                <ContactLink to='/contact' click={allColors || Bottom}>
                        Contact
                </ContactLink>
                <AboutLink to='/about' click={allColors || Bottom}>
                    About
                </AboutLink>
                
            </BottomLinks>
            
            <AtomDiv>
                <Atom src={atomLink} width={150} height={150}/>
            </AtomDiv> 
        </div>
    )
}

export default Layout