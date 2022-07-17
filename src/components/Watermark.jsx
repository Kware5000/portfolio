import styled from "styled-components";


const Text = styled.h1`
position: fixed;
top: ${props => props.top};
left: ${props => props.left};
right: ${props => props.right};
color: rgba(77, 72, 72, 0.095);
font-size: calc(5rem + 5vw);
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
z-index:0;
`


const BigTitle = ({top, left, right, bottom, text}) => {
    return (
        <Text  top={top}  left={left}  right={right} bottom={bottom}>
            {text}
        </Text>
    )
}

export default BigTitle

