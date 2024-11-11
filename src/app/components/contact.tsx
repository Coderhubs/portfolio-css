import React from 'react';

const Contact = () => {
  return (
    <div id="contact">
      <section>
        {/* Background Overlay */}
        <div className="bg-overlay"></div>

        <div className="container">
          <div className="form-container">
            <h2>Contact Us</h2>
            <p>Feel free to connect with us</p>

            {/* Full Name Field */}
            <div className="relative">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" />
 </div>

            {/* Contact No Field */}
            <div className="relative">
              <label htmlFor="contact">Contact No</label>
              <input type="number" id="contact" name="contact" />
            </div>

            {/* Email Field */}
            <div className="relative">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>

            {/* Message Field */}
            <div className="relative">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" />
            </div>

            {/* Send Message Button */}
            <button>Send message</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;