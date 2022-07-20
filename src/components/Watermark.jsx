import styled from "styled-components";
import devices from "./Devices"
 

const Text = styled.h1`
position: absolute;
top: ${props => props.top};
left: ${props => props.left};
right: ${props => props.right};
color: rgba(77, 72, 72, 0.095);
font-size: calc(5rem + 5vw);
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
z-index:0;

@media ${devices.tablet} { 

    font-size: calc(1rem + 4vw);
    top: ${props => props.smTop};
    left: ${props => props.smLeft};
    z-index: 0;
    letter-spacing: 3px;
    font-family: 'Franklin Gothic', 'Arial Narrow', Arial, sans-serif;
    font-weight: ${props => props.click ? '100' : '900'};
    color: ${props => props.click ? 'white' : 'rgba(77, 72, 72, 0.095)'};


} 


@media ${devices.desktopL} { 

    font-size: calc(2rem + 4vw);
    

}
  
`


const BigTitle = ({top, left, smTop, smLeft, text, click }) => {
    return (
        <Text  top={top}  left={left} smTop={smTop}  smLeft={smLeft} click={click}>
            {text}
        </Text>
        
    )
}

export default BigTitle

