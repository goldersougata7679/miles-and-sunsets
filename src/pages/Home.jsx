import Hero from '../components/Hero';
import SearchFilter from '../components/SearchFilter';
import TrekCard from '../components/TrekCard';
import ReviewCard from '../components/ReviewCard';
import CTASection from '../components/CTASection';
import treksData from '../data/treks';
import reviewsData from '../data/reviews';
import '../styles/trek.css';

function Home() {
  return (
    <main>
      <Hero />
      <SearchFilter />
      
      {/* Popular Treks Section */}
      <section className="popular-treks">
        <div className="section-header">
          <h2>Popular Treks</h2>
          <p>Handpicked adventures for your next journey</p>
        </div>
        
        <div className="trek-grid">
          {treksData.map((trek) => (
            <TrekCard key={trek.id} trek={trek} />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="section-header">
          <h2>Why Choose Miles & Sunsets</h2>
          <p>High-end memories at down-to-earth budgets.</p>
        </div>
        
        <div className="features-grid">
          <div className="feature-box">
            <div className="feature-icon">🏔️</div>
            <h3>Local Expertise</h3>
            <p>Our guides are locals who know the mountains inside out, ensuring a safe and authentic experience.</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon">🛡️</div>
            <h3>Safety First</h3>
            <p>We use premium equipment and follow strict safety protocols so you can focus on the adventure.</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon">💰</div>
            <h3>Honest Pricing</h3>
            <p>No hidden costs. We provide premium trekking experiences that remain accessible and budget-friendly.</p>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="reviews-section">
        <div className="section-header">
          <h2>What Our Trekkers Say</h2>
          <p>Real stories from our amazing community</p>
        </div>
        
        <div className="reviews-grid">
          {reviewsData.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>

      {/* Call To Action Section */}
      <CTASection />
    </main>
  );
}

export default Home;