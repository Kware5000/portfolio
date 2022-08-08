import styled, {css} from "styled-components";
import ContactForm from "./ContactForm";
import Phone from '../asset/phone.svg'
import Gmail from '../asset/gmail.svg'
import devices from "./Devices";

const MainComponent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Container= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 450px;
    width: 940px;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 #000000d8;
    @media ${devices.desktop} { 
        height: 600px;
        width: 1400px;
    }
    @media ${devices.laptop} { 
        height: 350px;
        width: 500px;
    }
    @media ${devices.mobileL} { 
        height: 350px;
        width: 200px;
        display: block;
    }

`
const Info = css`
    color: white;
    margin-left: 14%;
    margin-top: 30%;
    width: 100%;
    font-weight: 800;
    font-size: 25px;
    letter-spacing: 2px;
    @media ${devices.laptop} { 
        font-size: small;
        margin-left: 14px;
    }
`
const InfoCard = styled.div`
    width: 30%;
    height: 450px;
    z-index: 1000000;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background: #7425BA;
    background: -webkit-radial-gradient(top left, #7425BA, #B588EF);
    background: -moz-radial-gradient(top left, #7425BA, #B588EF);
    background: radial-gradient(to bottom right, #7425BA, #B588EF);  
    @media ${devices.desktop} { 
       height: 600px;
    }
    @media ${devices.laptop} { 
        height: 350px;
        font-size: small;
    }
    @media ${devices.mobileL} { 
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        height: 50px;
        display: flex;
        width: 100%;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }



    h1, div {
        ${Info}
    }
    h4 {
        font-size: 1rem;
    @media ${devices.laptop} { 
        font-size: xx-small;
    }
        margin-left: 10px;
    }
    h5 {
        font-size: .7rem;
        margin-left: 10px;
        @media ${devices.laptop} {
            font-size: .4rem;
        }
    }
    img {
        @media ${devices.laptop} {
            height: 12px;
            width: 12px;
        }
        @media ${devices.mobileL} {
            height: 23px;
            width: 25px;
            position: absolute;
            margin-top: -45px;
            margin-left: 23px;

        }        
    }
    h1, h4, h5 {
        @media ${devices.mobileL} {
            display: none;

        }
    }
    `

const Temp = styled.div`
    height: 450px;
    width: 70%;
    background-color: white;
    z-index: 100000000;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    @media ${devices.desktop} { 
       height: 600px;
    }
    @media ${devices.laptop} { 
        height: 350px;
    }
    @media ${devices.mobileL} { 
        height: 280px;
        padding-top: 20px;
        width: 100%;
        border-bottom-left-radius: 20px;
        border-top-right-radius: 0px;


    }
`
const ContactInfo = () => {


    return (
        <MainComponent>
            <Container>
                <InfoCard>
                    <h1>
                        Let's Connect!!
                    </h1>
                    <div><img src={Phone} alt="" width={20} height={15} onClick={()=>{alert('901-591-0430')}}/><h4>901 - 591 - 0430</h4></div>
                    <div><img smDisplay={'none'} src={Gmail} width={15} height={15} alt="" onClick={()=>{alert('kware5000@gmail.com')}}/><h5>kware5000@gmail.com</h5></div>
                </InfoCard>
                <Temp>
                    <ContactForm/>
                </Temp>
            </Container>
        </MainComponent>
    )
}
export default ContactInfo