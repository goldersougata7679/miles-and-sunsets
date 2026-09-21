import { Link } from 'react-router-dom';

// Notice { trek } in the parameters. This receives the data passed from the parent component.
function TrekCard({ trek }) {
  return (
    <div className="trek-card">
      <div className="trek-image-container">
        <img src={trek.coverImage} alt={trek.name} className="trek-image" />
      </div>
      
      <div className="trek-info">
        <span className="trek-destination">{trek.destination}</span>
        <h3 className="trek-name">{trek.name}</h3>
        
        <div className="trek-details">
          <span>{trek.durationLabel}</span>
          <span>{trek.difficulty}</span>
          <span>⭐ {trek.rating}</span>
        </div>
        
        <div className="trek-footer">
          <span className="trek-price">₹{trek.price.toLocaleString('en-IN')}</span>
          <Link to={`/treks/${trek.slug}`} className="btn-card">View Details</Link>
        </div>
      </div>
    </div>
  );
}

export default TrekCard;