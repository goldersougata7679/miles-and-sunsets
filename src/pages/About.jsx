import TeamCard from '../components/TeamCard';
import teamData from '../data/team';
import CTASection from '../components/CTASection';
import '../styles/about.css';

function About() {
  return (
    <main>
      {/* Header */}
      <section className="about-hero">
        <h1>About Miles & Sunsets</h1>
        <p>High-end memories. Down-to-earth budgets.</p>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="story-content">
          <h2>Our Story</h2>
          <p>
            Established in 2026, Miles & Sunsets was born out of a deep love for the Himalayas. 
            We noticed that premium trekking experiences were often heavily overpriced, while budget treks compromised on safety and comfort.
          </p>
          <p>
            We decided to bridge that gap. Our mission is to provide <strong>Travel. Explore. Unwind.</strong> experiences that are available almost everywhere in India, without burning a hole in your pocket. 
            We focus on ethical tourism, local empowerment, and strict safety standards.
          </p>
        </div>
        <div className="story-image-container">
          <img src="/images/agency/team-story.jpg" alt="Miles and Sunsets Team" />
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="team-container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <h2>Meet Our Experts</h2>
            <p style={{ color: '#7f8c8d', fontSize: '1.1rem' }}>The passionate individuals who make your adventure safe and memorable.</p>
          </div>
          
          <div className="team-grid">
            {teamData.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Reusing our CTA Section from the homepage! */}
      <CTASection />
    </main>
  );
}

export default About;