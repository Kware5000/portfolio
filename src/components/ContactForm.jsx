import styled from "styled-components";
import emailjs from '@emailjs/browser';
import { useRef } from "react"







const ContactComponent = styled.form`
  height: 90%;
  width: 90%;
  color: #182136;
  margin-left: 7%;
  margin-top: 10%;

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
 }

`
const Message = styled.div`

  label {
   display: block;
   font-weight: 800;
   color: #bdc3c7;
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

 }
 input[type="submit"] {
  background-color: #576574;
  color: white;
  font-size: 1rem;
  margin-top: 3%;
  padding: 15px 40px;
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

          <input type="submit" value="Send Message" action="/skills" />
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



