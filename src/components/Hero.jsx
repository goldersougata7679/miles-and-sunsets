import { Link } from 'react-router-dom';
import '../styles/home.css';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        {/* Updated Taglines based on the images */}
        <h1>Travel. Explore. Unwind.</h1>
        <p>High-end memories. Down-to-earth budgets. Available almost everywhere in India.</p>
        
        <div className="hero-buttons">
          <Link to="/treks" className="btn-primary">Explore Treks</Link>
          <Link to="/contact" className="btn-secondary">Plan Your Journey</Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;