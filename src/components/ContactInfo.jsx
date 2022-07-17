import styled, {css} from "styled-components";
import ContactForm from "./ContactForm";
import Phone from '../asset/phone.svg'
import Gmail from '../asset/gmail.svg'

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
    height: 80%;
    width: 70%;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 #000000d8;

`
const Info = css`
    color: white;
    margin-left: 14%;
    margin-top: 30%;
    width: 100%;
    font-weight: 800;
    font-size: 25px;
    letter-spacing: 2px;
`
const InfoCard = styled.div`
    width: 30%;
    height: 100%;
    z-index: 1000000;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background: #7425BA;
    background: -webkit-radial-gradient(top left, #7425BA, #B588EF);
    background: -moz-radial-gradient(top left, #7425BA, #B588EF);
    background: radial-gradient(to bottom right, #7425BA, #B588EF);  
    
    h1, div {
        ${Info}
    }
    h4 {
        font-size: 1rem;
        margin-left: 10px;
    }
    h5 {
        font-size: .7rem;
        margin-left: 10px;
    }
    
    `

const Temp = styled.div`
    height: 100%;
    width: 70%;
    background-color: white;
    z-index: 100000000;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
`
const ContactInfo = () => {


    return (
        <MainComponent>
            <Container>
                <InfoCard>
                    <h1>
                        Let's Connect!!
                    </h1>
                    <div><img src={Phone} alt="" width={20} height={15}/><h4>901 - 591 - 0430</h4></div>
                    <div><img src={Gmail} width={15} height={15} alt=""/><h5>kware5000@gmail.com</h5></div>
                </InfoCard>
                <Temp>
                    <ContactForm/>
                </Temp>
            </Container>
        </MainComponent>
    )
}
export default ContactInfo