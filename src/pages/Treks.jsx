import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TrekCard from '../components/TrekCard';
import treksData from '../data/treks';
import '../styles/trek.css';

// --- NEW: Spelling Checker Algorithm (Levenshtein Distance) ---
// This calculates how many letter changes it takes to turn word A into word B.
// You do not need to memorize this math! It is a standard utility function.
function getEditDistance(a, b) {
  if (a.length === 0) return b.length; 
  if (b.length === 0) return a.length; 
  const matrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));
  for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
  for (let j = 0; j <= b.length; j++) matrix[j][0] = j;
  for (let j = 1; j <= b.length; j++) {
    for (let i = 1; i <= a.length; i++) {
      const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1, 
        matrix[j - 1][i] + 1, 
        matrix[j - 1][i - 1] + indicator
      );
    }
  }
  return matrix[b.length][a.length];
}
// --------------------------------------------------------------

function Treks() {
  const location = useLocation();
  const incomingQuery = location.state?.query || '';

  const [selectedDestination, setSelectedDestination] = useState('All');
  const [searchText, setSearchText] = useState(incomingQuery);
  
  // NEW: State to hold our spelling suggestion
  const [suggestion, setSuggestion] = useState(null);

  const filteredTreks = treksData.filter((trek) => {
    const matchesDestination = selectedDestination === 'All' || trek.destination === selectedDestination;
    const matchesSearch = trek.name.toLowerCase().includes(searchText.toLowerCase()) || 
                          trek.destination.toLowerCase().includes(searchText.toLowerCase());
    return matchesDestination && matchesSearch;
  });

  // NEW: React useEffect to watch the searchText. 
  // If the search finds NOTHING (filteredTreks.length === 0), we try to find a typo.
  useEffect(() => {
    if (filteredTreks.length === 0 && searchText.length > 2) {
      
      // 1. Gather a list of all correct words (Trek names and Destinations)
      const validKeywords = [];
      treksData.forEach(trek => {
        validKeywords.push(trek.name);
        if (!validKeywords.includes(trek.destination)) {
          validKeywords.push(trek.destination);
        }
      });
      
      let bestMatch = null;
      let lowestDistance = 3; // We only suggest words that are 1 or 2 letters wrong
      
      // 2. Test the user's text against every correct word
      validKeywords.forEach(keyword => {
        const distance = getEditDistance(searchText.toLowerCase(), keyword.toLowerCase());
        if (distance < lowestDistance) {
          lowestDistance = distance;
          bestMatch = keyword;
        }
      });
      
      // 3. Update the suggestion state
      setSuggestion(bestMatch);
      
    } else {
      // If they delete the text or find a result, hide the suggestion
      setSuggestion(null); 
    }
  }, [searchText, filteredTreks.length]); // This tells React to run this effect only when these two values change

  return (
    <main>
      <div className="page-header">
        <h1>Explore Our Treks</h1>
        <p>Find the perfect adventure in the Himalayas</p>
      </div>

      <div className="treks-container">
        
        <div style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
          <input 
            type="text" 
            placeholder="Search treks or destinations..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: '100%', padding: '12px', borderRadius: '30px', border: '1px solid #ccc', fontSize: '1rem', textAlign: 'center' }}
          />
        </div>

        <div className="filter-bar">
          <button 
            className={`btn-filter ${selectedDestination === 'All' ? 'active' : ''}`}
            onClick={() => setSelectedDestination('All')}
          >
            All Treks
          </button>
          <button 
            className={`btn-filter ${selectedDestination === 'Darjeeling' ? 'active' : ''}`}
            onClick={() => setSelectedDestination('Darjeeling')}
          >
            Darjeeling
          </button>
          <button 
            className={`btn-filter ${selectedDestination === 'Sikkim' ? 'active' : ''}`}
            onClick={() => setSelectedDestination('Sikkim')}
          >
            Sikkim
          </button>
          <button 
            className={`btn-filter ${selectedDestination === 'Nepal' ? 'active' : ''}`}
            onClick={() => setSelectedDestination('Nepal')}
          >
            Nepal
          </button>
        </div>

        <p className="results-count">Showing {filteredTreks.length} treks</p>

        {filteredTreks.length === 0 ? (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <h3 style={{ color: '#7f8c8d' }}>No treks found matching your search.</h3>
            
            {/* NEW: If we found a suggestion, display it as a clickable button! */}
            {suggestion && (
              <p style={{ marginTop: '1rem', fontSize: '1.2rem', color: '#555' }}>
                Did you mean:{' '}
                <button 
                  onClick={() => setSearchText(suggestion)}
                  style={{
                    background: 'none', border: 'none', color: '#e67e22', 
                    fontWeight: 'bold', fontSize: '1.2rem', cursor: 'pointer',
                    textDecoration: 'underline'
                  }}
                >
                  {suggestion}
                </button>
                ?
              </p>
            )}
          </div>
        ) : (
          <div className="trek-grid">
            {filteredTreks.map((trek) => (
              <TrekCard key={trek.id} trek={trek} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default Treks;