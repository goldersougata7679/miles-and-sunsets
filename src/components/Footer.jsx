import { Link } from 'react-router-dom';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand Section */}
        <div className="footer-brand">
          <h3>Miles & Sunsets</h3>
          <p>High-end memories. Down-to-earth budgets.</p>
          <p>ESTD. 2026</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/treks">All Treks</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <div className="contact-item">
            <span>📞</span>
            <span>8900236308</span>
          </div>
          <div className="contact-item">
            <span>✉️</span>
            <span>milesandsunsets@gmail.com</span>
          </div>
          <div className="contact-item">
            <span>📷</span>
            <span>@Miles_and_sunsets_</span>
          </div>
          <div className="contact-item">
            <span>📘</span>
            <span>Miles & Sunsets</span>
          </div>
        </div>
        
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Miles & Sunsets. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;