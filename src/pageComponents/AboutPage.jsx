import Layout from "../components/Layout";
import Atom from "../asset/whiteatom.svg";
import styled, { css } from "styled-components";
import Man from "../asset/BlackManInYellow.svg";
import devices from "../components/Devices";
const Yellow = css`
  background-image: linear-gradient(315deg, #fbb034 0%, #ffdd00 74%);
  
  box-shadow: 0 4px 8px 0 #000000d8;
  z-index: 0;

`;
const YellowDiv = styled.div`
  ${Yellow}
  height: 700px;
  background-image: linear-gradient(315deg, #fbb034 0%, #ffdd00 74%);

  width: 2560px;
  position: absolute;
  top: 1px;
  @media ${devices.laptopL} { 
    width: 1460px;
  }
  @media ${devices.tablet} { 
    width: 900px;
    }
    @media ${devices.mobileL} { 
    width: 500;
  }
  h1 {
    color: white;
    position: absolute;
    font-size: 90px;
    word-spacing: -10px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    right: 160px;
    top: 10%;
    @media ${devices.tablet} { 
        font-size: 50px;
        word-spacing: 1px;

    }
    @media (min-width: 1920px) { 
        margin-right: 290px;

    }
    @media ${devices.mobileL} { 
        right: 335px;
        top: 70px;
        font-size: 40px;
  }
  }
`;
const BlackDiv = styled.div`
  background-color: #000000;
  background-color: #2d3436;
  background-image: linear-gradient(315deg, #2d3436 0%, #181818 74%);
  box-shadow: 0 4px 8px 0 #000000d8;
  z-index: 1;
  position: absolute;
    transform: skewY(15deg);
    top: 320px;
    height: 3000px;
    width: 2560px;
  @media ${devices.laptopL} { 
    transform: skewY(20deg);
    height: 2000px;
    width: 1600px;
    top: 220px;
  }
  @media ${devices.mobileL} { 
    transform: skewY(0deg);
    height: 2000px;
    width: 1600px;
    top: 180px;
  }
  
`;
const AboutInfo = styled.div`
    
    
    width: 800px;
    height: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    transform: skewY(-15deg);
    margin-top: 230px;
    margin-left: 850px;
    @media ${devices.laptopL} { 
    
    transform: skewY(-20deg);
    margin-top: 140px;
    margin-left: 320px;


  }
  @media ${devices.tablet} { 

        width: 500px;
        margin-left: 550px;
        margin-top: 20px;
    }
    @media ${devices.mobileL} { 
    transform: skewY(0deg);
    display: block;
    margin-left: 640px;
    margin-top: -60px;
  }
`
const MainComponent = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100vh;
  overflow: hidden;
  position: relative;

  width: 100vw;

  
  background-color: #34495e;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;
const AboveAll = styled.div`
  z-index: 2;
`;
const Avatar = styled.img`
  z-index: 100000000000;
  margin-bottom: 45px;
  @media ${devices.tablet} { 
        width: 100px;
        margin-bottom: 0px;

    }
    @media ${devices.mobileL} { 
    margin-left: 120px;
    margin-top: -70px;
      }
`;

const YellowBox = styled.div`
  ${Yellow}
  z-index: 1;
  height: 190px;
  width: 470px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(315deg, #fbb034 0%, #ffdd00 74%);

  @media ${devices.tablet} { 
    margin-left: 0px;
    width: 320px;
    height: 120px;
    }
    @media ${devices.mobileL} { 
        width: 230px;
        height: 190px;
        margin-left: 50px;
        margin-top: -40px;
        overflow-y: scroll;
        background-color: none;
        background-image: none;
        box-shadow:none;


  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
    color: white;
    @media ${devices.tablet} { 
        font-size: 12px;
    }
    @media ${devices.mobileL} { 
    font-size: 12px;
    margin-left: 2px;
    
  }
  }
`;
const AboutPage = () => {
  return (
    <>
      <MainComponent>
        <AboveAll>
          <Layout atomLink={Atom} allColors={true} />
        </AboveAll>
        <YellowDiv>
          <h1>Hey, I'm Kent</h1>
        </YellowDiv>
        <BlackDiv>
            <AboutInfo>
            <Avatar src={Man} alt="hi" height={240} width={300} />
            <YellowBox>
                <h3>
                I make beautiful websites that strive <br /> to serve the needs of
                each client. I consider <br /> myself a very structured and
                focused person <br /> with a passion for problem solving. I try to
                put
                <br /> as much thought and effort into any and <br /> everything I
                do.
                </h3>
            </YellowBox>
            </AboutInfo>
        </BlackDiv>

        
      </MainComponent>
    </>
  );
};

export default AboutPage;
