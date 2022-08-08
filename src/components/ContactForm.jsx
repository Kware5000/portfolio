import styled from "styled-components";
import emailjs from '@emailjs/browser';
import { useRef } from "react"
import devices from "./Devices";






const ContactComponent = styled.form`
  height: 400px;
  width: 700px;
  color: #182136;
  margin-left: 7%;
  margin-top: 10%;
  @media ${devices.desktop} { 
        height: 600px;
        width: 1000px;
  }
  @media ${devices.laptop} { 
        height: 200px;
        width: 600px;
  }

`;

const ConsumerInfo = styled.div`
  display: flex;
  width: 80%;
  height: 40%;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;


   label {
   display: block;
   font-weight: 800;
   color: #bdc3c7;
   @media ${devices.laptop} {
    font-size: small;
   }
 }

 input[type="text"],
 select,
 textarea {
   width: 100%; /* Full width */
   padding: 12px; /* Some padding */
   border: none; /* Gray border */
   border-radius: 4px; /* Rounded borders */
   margin-top: 6px; /* Add a top margin */
   margin-bottom: 16px; /* Bottom margin */
   resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
   display: inline-block;
   background: transparent;
   border-bottom: 1px solid #576574;
   @media ${devices.desktop} { 
        width:300px;
    }
    @media ${devices.laptop} { 
        width:120px;
        font-size: x-small;
    }
 }
 
 @media ${devices.laptop} {
  width: 310px;
  height: 40%;
 }
 @media ${devices.mobileL} {
  width: 210px;
  height: 50%;
  margin-bottom: 10px;
 }
`
const Message = styled.div`

@media ${devices.laptop} {
  margin-top: 70px;
}
  label {
   display: block;
   font-weight: 800;
   color: #bdc3c7;
   @media ${devices.laptop} {
      font-size: small;
    }
 }

 input[type="text"],
 input[type="email"],
  select,
  textarea {
    width: 80%; /* Full width */
    padding: 8px; /* Some padding */
    padding-bottom: 5rem;
    border: none; /* Gray border */
    border-radius: 4px; /* Rounded borders */
    margin-top: 6px; /* Add a top margin */
    margin-bottom: 16px; /* Bottom margin */
    resize: none; /* Allow the user to vertically resize the textarea (not horizontally) */
    display: inline-block;
    background: transparent;
    border-bottom: 1px solid #576574;
    @media ${devices.laptop} {
      font-size: x-small;
    }
    @media ${devices.laptop} {
      width: 300px;
      height: 1px;
      padding-bottom: 60px;

    }
    
 }
 input[type="submit"] {
  background-color: #576574;
  color: white;
  font-size: .8rem;
  padding: 10px 35px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  display: block;
}


input[type="submit"]:hover {
  background-color: #45a049;
  display: block;
}
`
const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dd5bhus', 'template_di1bhqj', form.current, 'zULcocc5FlWUltDGA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <ContactComponent  ref={form} onSubmit={sendEmail}>
          <ConsumerInfo >
          <div>
              <label>First Name</label>
              <input
                type="text"
                name="firstname"
                placeholder="Your first name.."
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                name="lastname"
                placeholder="Your last name.."
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="helloworld@domain.com"
              />
            </div>
            <div>
              <label>Number</label>
              <input
                type="text"
                name="number"
                placeholder="901-123-4567"
              />
            </div>

          </ConsumerInfo>
          <Message>
          <label>Subject</label>
          <textarea
            name="message"
            placeholder="Write something.."
          ></textarea>

          <input type="submit" value="Send Message"  onClick={()=>{alert('Message Delivered')}}/>
          </Message>
    </ContactComponent>
  );
};

export default ContactForm;



// label {
//   display: block;
//   font-weight: 800;
//   color: #bdc3c7;
// }

// input[type="text"],
// select,
// textarea {
//   width: 100%; /* Full width */
//   padding: 12px; /* Some padding */
//   border: none; /* Gray border */
//   border-radius: 4px; /* Rounded borders */
//   margin-top: 6px; /* Add a top margin */
//   margin-bottom: 16px; /* Bottom margin */
//   resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
//   display: inline-block;
//   background: transparent;
//   border-bottom: 1px solid #576574;
// }



