import styled, { css } from "styled-components";
import { useState } from "react";
import devices from "./Devices";
import Candles from "../asset/candles.jpg";
import Realty from "../asset/realestate.jpg";
import Portfolio from "../asset/portfolio.jpg";
import { NavLink } from "react-router-dom";

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
`;

const Flex = styled.div`
  margin-top: 100px;
  height: 400px;
  width: 60%;
  overflow-x: scroll;
  justify-content: space-between;
  align-items: center;
  display: flex;
  position: absolute;
  @media ${devices.desktop} {
    margin-top: 300px;
    height: 800px;
    width: 2500px;
  }
  @media ${devices.tablet} {
    height: 350px;
    width: 370px;
    display: block;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  @media ${devices.mobileL} {
    width: 310px;
    margin-right: 85px;
  }
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 280px;
  margin-left: 140px;
  margin-right: 200px;
  transition: transform 1.4s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 #000000d8;
  position: relative;
  color: black;
  transition: transform 1.2s;
  transform-style: preserve-3d;
  border-radius: 50px;
  z-index: 1000;
  opacity: ${(props) => (props.hover ? "calc(100%)" : "calc(40%)")};

  &.flipped {
    transform: rotateY(180deg);
  }
  @media ${devices.desktop} {
    height: 500px;
    width: 400px;
    box-shadow: 0 20px 140px 0 #000000ca;
  }
  @media ${devices.tablet} {
    height: 250px;
    width: 180px;
    margin-left: 120px;
    margin-right: 200px;
    margin-bottom: 70px;
  }
  @media ${devices.mobileL} {
    height: 220px;
    width: 170px;
  }
`;

const cardSide = css`
  height: 350px;
  width: 280px;
  position: absolute;
  background-color: #fff;
  backface-visibility: hidden;
  border-radius: 10px;
  @media ${devices.desktop} {
    height: 700px;
    width: 560px;
  }
  @media ${devices.tablet} {
    height: 300px;
    width: 220px;
  }
  @media ${devices.mobileL} {
    height: 220px;
    width: 170px;
  }
`;
const ProjectFrontSide = styled.div`
  ${cardSide}
`;
const ProjectBackSide = styled.div`
  ${cardSide}
  transform: rotateY(-180deg);
`;

const Project = styled.img`
  height: 100%;
  width: 100%;
  object-fit: fill;
  border-radius: 10px;
`;
const Button = styled(NavLink)`
  border-radius: 7px;
  background: #3eadcf;
  border: none;
  padding: 2.5%;
  padding-left: 8%;
  padding-right: 8%;
  font-weight: 600;
  font-size: 1rem;
  color: white;
  cursor: pointer;
  text-decoration: none;
`;
const LinkButtons = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  align-items: center;
  flex-direction: column;
  height: 30%;
  width: 100%;
  bottom: 15%;
  margin-left: auto;
  margin-right: auto;

  h1{
    color: white;
  }
`;

const ProjectCardComponent = () => {
  const [hover, setHover] = useState(false);

  const [hover2, setHover2] = useState(false);

  const [hover3, setHover3] = useState(false);
  const handlerHover = () => {
    setHover(!hover);
  };
  const handlerHover2 = () => {
    setHover2(!hover2);
  };
  const handlerHover3 = () => {
    setHover3(!hover3);
  };
  return (
    <MainContainer>
      <Flex>
        <Card
          onMouseEnter={() => {
            handlerHover();
          }}
          onMouseLeave={() => {
            handlerHover();
          }}
          hover={hover}
        >
          <ProjectFrontSide>
            <Project src={Portfolio} alt="project" />
            <LinkButtons>
              <Button
                target="_blank"
                to={{ pathname: "https://github.com/Kware5000" }}
              >
                Demo
              </Button>
              <Button
                target="_blank"
                to={{ pathname: "https://github.com/Kware5000/portfolio" }}
              >
                Github
              </Button>
            </LinkButtons>
          </ProjectFrontSide>
          <ProjectBackSide></ProjectBackSide>
        </Card>
        <Card
          onMouseEnter={() => {
            handlerHover2();
          }}
          onMouseLeave={() => {
            handlerHover2();
          }}
          hover={hover2}
        >
          <ProjectFrontSide>
            <Project src={Realty} alt="project" />
            <LinkButtons>
              <Button
                target="_blank"
                to={{ pathname: "https://github.com/Kware5000" }}
              >
                Demo
              </Button>
              <Button
                target="_blank"
                to={{ pathname: "https://github.com/Kware5000" }}
              >
                Github
              </Button>
            </LinkButtons>
          </ProjectFrontSide>
          <ProjectBackSide></ProjectBackSide>
        </Card>
        <Card
          onMouseEnter={() => {
            handlerHover3();
          }}
          onMouseLeave={() => {
            handlerHover3();
          }}
          hover={hover3}
        >
          <ProjectFrontSide>
            <Project src={Candles} alt="project" />
            <LinkButtons>
              <h1>Coming Soon</h1>
            </LinkButtons>
          </ProjectFrontSide>
          <ProjectBackSide></ProjectBackSide>
        </Card>
      </Flex>
    </MainContainer>
  );
};

export default ProjectCardComponent;
