import styled from "styled-components"


const SkillButton = styled.button`
    border-radius: 7px;
    background-color: white;
    border: 2px solid #78db9c;
    margin: 1%;
    padding: 2.5%;
    font-weight: 600;
    font-size: 1.1rem;
    color: #78db9c;
    cursor: pointer;

    &.goBack {
        position: relative;
        border-radius: 100px;
        left: 32%;
        top: 2%;
    }

`

const SkillsButton = ({skill, onClick, backBtn}) => {
   
    return (
        <SkillButton className={backBtn ? 'goBack' : null} onClick={onClick}>{skill}</SkillButton>
    )
}
export default SkillsButton