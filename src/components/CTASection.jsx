import { Link } from 'react-router-dom';

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Ready for Your Next Adventure?</h2>
        <p>Join Miles & Sunsets for an unforgettable journey. Let us handle the details while you make the memories.</p>
        <Link to="/contact" className="btn-primary" style={{ backgroundColor: '#fff', color: '#1a252f' }}>
          Contact Us Today
        </Link>
      </div>
    </section>
  );
}

export default CTASection;