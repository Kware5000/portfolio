import { NavLink } from "react-router-dom"
import styled from "styled-components"
import devices from "./Devices"

const LogoComponent = ({click}) => {
    

    const Logo = styled.h1`
        display: inline-block;
        color: ${props => click ? props.theme.body : props.theme.text};
        font-family: 'Pacifico', cursive;
        position: fixed;
        font-weight: 100;
        left: 2rem;
        top: 2rem;
        z-index: 3;
    @media ${devices.mobileL} {
        font-size: 20px;
    }

    `

    return (
        <NavLink to='/portfolio'>
            <Logo>
                KW
            </Logo>
        </NavLink>
    )
}

export default LogoComponent