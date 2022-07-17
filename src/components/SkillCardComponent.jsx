import styled, { css } from "styled-components";
import SkillsButton from "./SkillsButton";
import { SkillData } from "./SkillData";
import { useState } from "react";



const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 65%;
    width: 25%;
    transition: transform 1.4s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 #000000d8;
    position: relative;
    color: black;
    transition: transform 1.2s;
    transform-style: preserve-3d;
    border-radius: 50px;

    
    &.flipped {
        transform: rotateY(180deg);
    }
`;
const cardSide = css`
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: #fff;
    backface-visibility: hidden;
    border-radius: 50px;

`
const FrontCard = styled.div`
    ${cardSide}


`;
const BackCard = styled.div`
    ${cardSide}
    transform: rotateY(-180deg);

`;
const Flex = styled.div`
  margin-left: 10%;
  margin-top: 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 215px;
  width: 73%;
`;

const TextBox = styled.div`
  height: ${(props) => (props.height === undefined ? "17%" : props.height)};
  width: ${(props) => (props.width === undefined ? "auto" : props.width)};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  background: ${(props) => props.Bg};
  border-bottom: ${(props) => props.borderBottom};
  margin-left: auto;
  margin-right: auto;

  &.notSharp {
      border-top-left-radius: 50px;
      border-top-right-radius: 50px;

  }
`;
const Text = styled.h3`
  position: absolute;
  font-size: ${(props) => props.fontSize};
  font-weight: 400;
`;

const TechTitle = styled.h2`

    margin-top: 55%;
    width: 80%;
    font-size: 1.1rem;
    margin-left: auto;
    margin-right: auto;
`
const TechIcon = styled.img`
    position: absolute;
    top: 6%;
`


const SkillCardComponent = () => {
      const [flip, setFlip] = useState(false);
      const [obj, setObj] = useState({});
      const handleClick = (skill, goBack) => {
        setObj(skill);
        goBack ? setFlip(false):
        setFlip(!flip);
      };




   
      return (
        <Card className={flip ? 'flipped' : ''}>
                <FrontCard>
                    <TextBox
                        color="white"
                        Bg="linear-gradient(to right, #84fab0, #8fd3f4);"
                        className="notSharp"
                        >
                        <Text fontSize="xx-large">My Skills</Text>
                    </TextBox>
                    <TextBox
                        color="#686868"
                        Bg="#fff"
                        borderBottom="1px solid #c0c0c0"
                        height="10%"
                        width="50%"
                        >
                        <Text>Click for Details</Text>
                    </TextBox>
                    <Flex>
                        {SkillData.map((skill) => (
                            <SkillsButton
                            skill={skill.name}
                            key={skill.name}
                            onClick={() => handleClick(skill)}
                            />
                        ))}
                    </Flex>
                </FrontCard>
                <BackCard className={flip ? 'flipped' : ''}>
                    <TextBox color="white"
                        Bg={obj.Color ? obj.Color : 'linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);'}
                        className="notSharp" 
                        height="80%">
                             {obj.Icon ? <TechIcon src={obj.Icon} height={180} width={180}/> : ''}
                            <TechTitle>
                                {obj.Description}
                            </TechTitle>

                    </TextBox>
                    <SkillsButton backBtn={true} skill='&#8592; Go Back' onClick={() => handleClick({}, false)} />
                </BackCard>          
        </Card>
        
      );
    };







export default SkillCardComponent