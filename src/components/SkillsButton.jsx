import styled from "styled-components"
import devices from "./Devices"

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
        @media ${devices.mobileL} {
            left: 0%;
        }
    }
    @media ${devices.tablet} {
        font-size: .9rem;
    } 
    @media ${devices.mobileL} {
    overflow-y: scroll;
    margin-left: auto;
    margin-right: auto;
    margin-top: 8px;
    padding: 2%;
    display: block;
    font-size: .8rem;

  }

`

const SkillsButton = ({skill, onClick, backBtn}) => {
   
    return (
        <SkillButton className={backBtn ? 'goBack' : null} onClick={onClick}>{skill}</SkillButton>
    )
}
export default SkillsButton