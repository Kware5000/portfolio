import Layout from "../components/Layout"
import styled from "styled-components"
import Atom from "../asset/whiteatom.svg"
import ContactInfo from "../components/ContactInfo"
const MainComponent = styled.div`
    height: 100vh;
    width: 100vw;  
    background-image: linear-gradient(326deg, #353b48 0%, #2f3640 74%);
    position: relative;

`
// const Flex = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     color: #b84eff;
//     position: absolute;
//     transform: rotate(180deg);
//     width: 100%;
//     .triangle {
//         width: 50%;
//         margin-left: 13%;
//     }
    
// `


const ContactPage = () => {

    return (
        
        <MainComponent>
           
            <Layout atomLink={Atom} allColors={true}/>
            <ContactInfo/>

        </MainComponent>
    )
} 

export default ContactPage