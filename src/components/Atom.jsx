import devices from "./Devices"
import styled from "styled-components"

const Image = styled.img`
    @media ${devices.tablet}{
        width: ${props => props.smWidth}
    }
    @media ${devices.mobileL}{
        width: ${props => `calc(${props.smWidth} - 19px)` }
    }
`
const Atom= ({onClick, width, height, src, smWidth}) => {
    return (

        <Image onClick={onClick} src={src} alt='Atom' width={width} smWidth={smWidth} height={height}/>

    )
}

export default Atom