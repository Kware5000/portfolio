import styled from "styled-components"


const PNGcomponent = ({src, alt, invert}) => {

    const Image = styled.img`
        margin-bottom: 17px;
        filter: ${ props => props.invert};
    `
    return (

        <Image src={src} alt={alt} width={22} height={22} invert={invert}/>

    )
}


export default PNGcomponent