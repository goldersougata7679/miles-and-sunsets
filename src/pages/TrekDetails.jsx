import { useParams, Link } from 'react-router-dom';
import treksData from '../data/treks';
import '../styles/trek-details.css';

function TrekDetails() {
  // useParams() extracts the dynamic part of the URL.
  // If the URL is /treks/sandakphu-trek, then slug = "sandakphu-trek"
  const { slug } = useParams();

  // Find the single trek object in our array that matches this slug
  const trek = treksData.find((t) => t.slug === slug);

  // If someone types a random URL like /treks/fake-trek, trek will be undefined.
  // We handle that gracefully here:
  if (!trek) {
    return (
      <div style={{ textAlign: 'center', padding: '10rem 2rem' }}>
        <h2>Trek Not Found</h2>
        <p>Sorry, we couldn't find the trek you're looking for.</p>
        <Link to="/treks" className="btn-primary" style={{ display: 'inline-block', marginTop: '1rem' }}>
          Back to All Treks
        </Link>
      </div>
    );
  }

  return (
    <main>
      {/* Dynamic Hero Section */}
      <section className="trek-hero" style={{ backgroundImage: `url(${trek.coverImage})` }}>
        <div className="trek-hero-overlay"></div>
        <div className="trek-hero-content">
          <span className="location">{trek.destination}</span>
          <h1>{trek.name}</h1>
          <div>⭐ {trek.rating} • {trek.difficulty}</div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="trek-content-layout">
        
        {/* Left Column */}
        <div className="trek-main-info">
          <h2>Overview</h2>
          <p className="trek-overview">{trek.overview}</p>

          <h2>Itinerary</h2>
          <div className="itinerary-list">
            {/* Loop through the specific trek's itinerary array */}
            {trek.itinerary.map((item, index) => (
              <div key={index} className="itinerary-day">
                <h4>
                  <span className="day-badge">Day {item.day}</span>
                  {item.title}
                </h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (Sidebar) */}
        <aside className="trek-sidebar">
          <div className="sidebar-price">
            ₹{trek.price.toLocaleString('en-IN')}
          </div>
          
          <ul className="quick-facts">
            <li><span>Duration:</span> <strong>{trek.durationLabel}</strong></li>
            <li><span>Difficulty:</span> <strong>{trek.difficulty}</strong></li>
            <li><span>Max Altitude:</span> <strong>{trek.maxAltitude}</strong></li>
            <li><span>Location:</span> <strong>{trek.destination}</strong></li>
          </ul>

          <Link to="/contact" className="btn-book">
            Enquire Now
          </Link>
        </aside>

      </div>
    </main>
  );
}

export default TrekDetails;