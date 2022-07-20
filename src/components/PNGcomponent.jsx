import styled from "styled-components"
import devices from "./Devices"

const PNGcomponent = ({src, alt, invert}) => {

    const Image = styled.img`
        margin-bottom: 13px;
        filter: ${ props => props.invert};
        @media ${devices.tablet}{
            filter: black;
            height: 20px;
            width: 20px;
        }
    `

    return (

        <Image src={src} alt={alt} width={22} height={22} invert={invert}/>

    )
}


export default PNGcomponent