import React from 'react'
import '../GetInTouch/GetinTouch.css'
import msgicon from '../../assets/msg-icon.png'
import mailicon from '../../assets/mail-icon.png'
import phoneicon from '../../assets/phone-icon.png'
import locationicon from '../../assets/location-icon.png'

const GetInTouch = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "31b8105f-23be-4949-954b-dd61b7039c11");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className='getintouch'> 

    <div className='contact_details'>
      <h3>Send us a message <img src={msgicon} alt="" /> </h3>
      <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <span><img src={mailicon} alt="" />Contact@GreatStack.dev</span>
        <span><img src={phoneicon} alt="" />+1 123-456-7890</span>
        <span className='address'><img src={locationicon} alt="" />77 Massachusetts Ave, Cambridge
MA 02139, United States</span>
    </div>

    <form className='input_field' onSubmit={onSubmit}>
      
    <label htmlFor="name">Your name</label>
      <input type="text" id='name' className='form-input' placeholder='Enter your name' name='Name'/>
      <label htmlFor="phone">Phone Number</label>
      <input type="phone" id='phone' className='form-input' placeholder='Enter your phone' name='Phone'/>
      <label htmlFor="email">Your Email</label>
      <input type="email" id='email' className='form-input'  placeholder='Enter your email' name='Email'/>
      <label htmlFor="description">Write your messages here</label>
   <textarea name="Message" id="description" className='form-input textarea'  placeholder='Enter your message'></textarea>
    
   <button className='btn submit_btn' >Submit Now</button>
    </form>
    
    

    </div>
  )
}

export default GetInTouch