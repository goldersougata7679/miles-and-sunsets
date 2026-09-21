function ReviewCard({ review }) {
  // A quick way to render the correct number of stars
  const stars = "⭐".repeat(review.rating);

  return (
    <div className="review-card">
      <div className="review-stars">{stars}</div>
      <p className="review-comment">"{review.comment}"</p>
      
      <div className="reviewer-info">
        <img src={review.image} alt={review.name} className="reviewer-image" />
        <div className="reviewer-details">
          <h4>{review.name}</h4>
          <span>{review.trek}</span>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;