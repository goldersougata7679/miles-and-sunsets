function TeamCard({ member }) {
  return (
    <div className="team-card">
      <div className="team-image-container">
        <img src={member.image} alt={member.name} className="team-image" />
      </div>
      <div className="team-info">
        <h3>{member.name}</h3>
        <span className="team-role">{member.role}</span>
        <span className="team-experience">⛰️ {member.experience} Experience</span>
        <p>{member.description}</p>
      </div>
    </div>
  );
}

export default TeamCard;