import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Direct public folder path use karein */}
      <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
        <img 
          src="/images/tuhin/logoBgRemove.png" 
          alt="Miles & Sunsets" 
          className="logo-img" 
        />
      </Link>
      
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? '✕' : '☰'}
      </div>

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/treks" onClick={toggleMenu}>Treks</Link>
        {/* <Link to="/destinations" onClick={toggleMenu}>Destinations</Link> */}
        <Link to="/about" onClick={toggleMenu}>About</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;