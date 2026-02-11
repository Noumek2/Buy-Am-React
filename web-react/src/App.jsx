import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/service';
import Contact from './pages/contact';

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', background: '#231a1aff' }}>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Optional: 404 page */}
          <Route path="*" element={<h1 style={{ textAlign: 'center', padding: '4rem' }}>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;