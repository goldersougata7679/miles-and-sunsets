import { Link } from 'react-router-dom';

function DestinationCard({ destination }) {
  return (
    <Link to="/destinations" className="destination-card">
      <div className="destination-image-container">
        <img src={destination.image} alt={destination.name} className="destination-image" />
        <div className="destination-overlay">
          <h3 className="destination-name">{destination.name}</h3>
          <span className="destination-count">{destination.trekCount} Treks</span>
        </div>
      </div>
    </Link>
  );
}

export default DestinationCard;