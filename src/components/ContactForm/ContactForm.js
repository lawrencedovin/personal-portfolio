import React from 'react';


function ContactForm() {
  return(
    <div data-testid="ContactForm">
      <div className="contact__form-container">
        <div className="contact__form--info">
          <h1 className="contact__form--info-title">
            Contact
          </h1>
          <ul>
            <li className="contact__form--info-details"><span><i className="fas fa-map-marker-alt"></i>Rockville, Maryland</span></li>
            <li className="contact__form--info-details"><span><i className="fas fa-phone"></i>(610) 579-1888</span></li>
            <li className="contact__form--info-details"><span><i className="fas fa-envelope"></i>lawrence.dovin@hotmail.com</span></li>
          </ul>
        </div>
        <form className="contact__form">

        </form>
      </div>
    </div>
  )
};

export default ContactForm;
