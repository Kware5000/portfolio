import styled, { css } from "styled-components";
import SkillsButton from "./SkillsButton";
import { SkillData } from "./SkillData";
import { useState } from "react";
import devices from "./Devices";

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 315px;
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
  @media ${devices.tablet} {
    height: 300px;
    width: 260px;
  }
  @media ${devices.mobileL} {
    height: 250px;
    width: 170px;
    margin-left: 10px;
    margin-top: 20px;

}
`;
const cardSide = css`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: #fff;
  backface-visibility: hidden;
  border-radius: 50px;
`;
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
  @media ${devices.tablet} {
    height: 170px;
    
  }
  @media ${devices.mobileL} {
    overflow-y: scroll;
    height: 130px;
    width: 80%;
    display: block;
  }
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
    @media ${devices.mobileL}{
    }
  }
`;
const Text = styled.h3`
  position: absolute;
  font-size: ${(props) => props.fontSize};
  font-weight: 400;
  @media ${devices.tablet} {
    font-size: ${(props) => props.smFontSize};
  }
  @media ${devices.mobileL} {
    font-size: ${(props) => props.X_smFontSize};
  }
`;

const TechTitle = styled.h2`
  margin-top: 55%;
  width: 80%;
  font-size: 1.1rem;
  margin-left: auto;
  margin-right: auto;
  @media ${devices.tablet} {
    margin-top: 45%;
    font-size: .9rem;
  }
  @media ${devices.mobileL} {
    margin-top: 50%;
    font-size: .7rem;
    overflow-x: scroll;
    height: 42%;
  }
`;
const TechIcon = styled.img`
  position: absolute;
  top: 6%;
  @media ${devices.tablet} {
    top: 4%;
    height: 110px;
  }
  @media ${devices.mobileL} {
    top: 4%;
    height: 90px;
  }
`;

const SkillCardComponent = () => {
  const [flip, setFlip] = useState(false);
  const [obj, setObj] = useState({});
  const handleClick = (skill, goBack) => {
    setObj(skill);
    goBack ? setFlip(false) : setFlip(!flip);
  };

  return (
    <Card className={flip ? "flipped" : ""}>
      <FrontCard>
        <TextBox
          color="white"
          Bg="linear-gradient(to right, #84fab0, #8fd3f4);"
          className="notSharp"
        >
          <Text fontSize="xx-large" smFontSize="x-large" X_smFontSize="large">
            My Skills
          </Text>
        </TextBox>
        <TextBox
          color="#686868"
          Bg="#fff"
          borderBottom="1px solid #c0c0c0"
          height="10%"
          width="50%"
        >
          <Text smFontSize="medium" X_smFontSize="small">Click for Details</Text>
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
      <BackCard className={flip ? "flipped" : ""}>
        <TextBox
          color="white"
          Bg={
            obj.Color
              ? obj.Color
              : "linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);"
          }
          className="notSharp"
          height="80%"
          smHeight="80%"
        >
          {obj.Icon ? <TechIcon src={obj.Icon} height={180} width={180} /> : ""}
          <TechTitle>{obj.Description}</TechTitle>
        </TextBox>
        <SkillsButton
          backBtn={true}
          skill="&#8592; Go Back"
          onClick={() => handleClick({}, false)}
        />
      </BackCard>
    </Card>
  );
};

export default SkillCardComponent;
