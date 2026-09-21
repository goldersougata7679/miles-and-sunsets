import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Treks from './pages/Treks';
import TrekDetails from './pages/TrekDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound'; // 1. Import the new page
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treks" element={<Treks />} />
          <Route path="/treks/:slug" element={<TrekDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* 2. The wildcard (*) catches ALL URLs that don't match the ones above */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;