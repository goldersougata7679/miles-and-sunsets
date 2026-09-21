import { useState } from 'react';
import '../styles/contact.css';

// The agency's WhatsApp number (country code + number)
const WHATSAPP_NUMBER = "918900236308";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    trek: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let currentErrors = {};

    if (!formData.name.trim()) currentErrors.name = "Name is required";
    if (!formData.phone.trim()) currentErrors.phone = "Phone number is required";
    if (!formData.email.trim()) currentErrors.email = "Email is required";
    
    setErrors(currentErrors);

    // If there are no errors, proceed to WhatsApp!
    if (Object.keys(currentErrors).length === 0) {
      
      // 1. Format the message exactly how it should look in WhatsApp
      const whatsappMessage = `*New Website Enquiry* 🏔️
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Interested Trek:* ${formData.trek || 'Not specified'}
*Message:* ${formData.message || 'No additional message'}`;

      // 2. Encode the message so it works safely in a URL (handles spaces, line breaks, etc.)
      const encodedMessage = encodeURIComponent(whatsappMessage);
      
      // 3. Create the final WhatsApp link
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
      
      // 4. Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      // 5. Show the Thank You message on the website
      setIsSubmitted(true);
    }
  };

  return (
    <main>
      <div className="contact-container">
        
        {/* Left Side: Contact Information */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Have a question about a trek? Want to customize an itinerary? Our team is here to help you plan the perfect adventure.</p>
          
          <div className="info-item">
            <span className="info-icon">📞</span>
            <span>8900236308</span>
          </div>
          <div className="info-item">
            <span className="info-icon">✉️</span>
            <span>milesandsunsets@gmail.com</span>
          </div>
          <div className="info-item">
            <span className="info-icon">📍</span>
            <span>Available almost everywhere in India</span>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="contact-form-box">
          {isSubmitted ? (
            <div className="success-message">
              <h3>Redirecting to WhatsApp... 💬</h3>
              <p>Your enquiry has been formatted and sent to WhatsApp.</p>
              <p>Please hit "Send" in WhatsApp to complete your enquiry!</p>
              <button 
                className="btn-submit" 
                style={{ marginTop: '2rem' }}
                onClick={() => setIsSubmitted(false)}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>
              </div>

              <div className="form-group">
                <label>Interested Trek (Optional)</label>
                <select name="trek" value={formData.trek} onChange={handleChange}>
                  <option value="">Select a Trek</option>
                  <option value="Sandakphu">Sandakphu Trek</option>
                  <option value="Goechala">Goechala Trek</option>
                  <option value="EBC">Everest Base Camp</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message / Special Requests</label>
                <textarea name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
              </div>

              <button type="submit" className="btn-submit">Send Enquiry</button>
            </form>
          )}
        </div>

      </div>
    </main>
  );
}

export default Contact;