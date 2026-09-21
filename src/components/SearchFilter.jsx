import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';

function SearchFilter() {
  // 1. Create state to hold what the user types
  const [searchTerm, setSearchTerm] = useState('');
  
  // 2. useNavigate allows us to change pages via JavaScript instead of clicking a <Link>
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    
    // Navigate to the Treks page, and secretly pass the 'searchTerm' in the background state!
    navigate('/treks', { state: { query: searchTerm } });
  };

  return (
    <section className="search-section">
      <div className="search-container">
        <h3 className="search-title">Find Your Next Adventure</h3>
        
        <form className="search-form" onSubmit={handleSearch}>
          <div className="form-group" style={{ flex: 1 }}>
            <label>Where do you want to go?</label>
            <input 
              type="text" 
              placeholder="Search destination or trek name (e.g., Sandakphu, Sikkim)..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button type="submit" className="btn-search">Search Treks</button>
        </form>
      </div>
    </section>
  );
}

export default SearchFilter;