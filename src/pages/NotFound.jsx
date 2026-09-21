import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main style={{ 
      textAlign: 'center', 
      padding: '8rem 2rem', 
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ fontSize: '6rem', color: '#2c3e50', margin: '0' }}>404</h1>
      <h2 style={{ fontSize: '2rem', color: '#e67e22', marginBottom: '1rem' }}>Lost in the Mountains?</h2>
      <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '500px', marginBottom: '2rem' }}>
        The trail you are looking for doesn't exist. It might have been moved or you typed the wrong address.
      </p>
      <Link to="/" className="btn-primary" style={{ display: 'inline-block' }}>
        Back to Base Camp (Home)
      </Link>
    </main>
  );
}

export default NotFound;