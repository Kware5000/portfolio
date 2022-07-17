import { NavLink } from "react-router-dom"
import PNGcomponent from "./PNGcomponent"
import styled from "styled-components"
import Github from '../asset/github.png'
import LinkedIn from '../asset/LinkedIn.png'
import Gmail from '../asset/gmail.png'
import Resume from '../asset/resume.png'

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 2rem;
    z-index: 3;
    filter: ${props => props.click ? 'invert()': 'none'};
    
`
const Line = styled.span`
    width: 2px;
    height: 7rem;
    //remember, theme is coming from ThemeProvider in App.js
    background-color: #000;

`


        
const SocialIcons = ({click}) => {
    return (
        <Icons click={click}>
           
            <div>
                <NavLink target='_blank' to={{pathname:"https://github.com"}}>
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
            <Line click={click} />
        </Icons>
        
    )
}
export default SocialIcons