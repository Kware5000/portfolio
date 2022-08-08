import { NavLink } from "react-router-dom"
import PNGcomponent from "./PNGcomponent"
import styled from "styled-components"
import Github from '../asset/github.png'
import LinkedIn from '../asset/LinkedIn.png'
import Gmail from '../asset/gmail.png'
import Resume from '../asset/resume.png'
import devices from "./Devices"

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 2rem;
    z-index: 3;
    filter: ${props => props.click ? 'invert()': 'none'};
    @media ${devices.tablet}{
        filter: ${props => props.filter}
        

    }
`
const Line = styled.span`
    width: 2px;
    height: 7rem;
    //remember, theme is coming from ThemeProvider in App.js
    background-color: #000;
    @media ${devices.tablet}{
        height: 2rem;
        filter: ${props => props.filter}
    }

`


        
const SocialIcons = ({click, filter }) => {
    return (
        <Icons click={click} filter={filter}>
           
            <div>
                <NavLink target='_blank' to={{pathname:"https://github.com/Kware5000"}}>
                    <PNGcomponent src={Github}  alt='Github'/>
                </NavLink>
            </div>
            <div>
                <NavLink to='/about'>
                    <PNGcomponent src={Gmail} alt='Gmail'/>
                </NavLink>
            </div>
            <div>
                <NavLink to='/work'>
                    <PNGcomponent src={LinkedIn} alt='Linkedin'/>

                </NavLink>
            </div>
            <div>
                <NavLink to='/skills'>
                    <PNGcomponent src={Resume}alt='Resume'/>

                </NavLink>
            </div>
            <Line click={click}  filter={filter}/>
        </Icons>
        
    )
}
export default SocialIcons