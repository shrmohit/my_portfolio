import React from 'react';


function Contactform() {
  return (
    <div className='contact-container'>
      <div className='contact-section'>
        <h1>Contact Me</h1>
        <div className='contactform-item'> 
          <form className='form-section' action="">
            <h1>Email Me</h1>
            <input className="form-input" type="email" placeholder='Your Email' />
            <input className="form-input" type="text" placeholder='Your Name' />
            <input className="form-input" type="text" placeholder='Subject' />
            <textarea className='form-message' placeholder='Message'></textarea>
            <button className='form-inputs'>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactform;
