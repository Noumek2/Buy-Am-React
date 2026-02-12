import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/Authpage';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', background: '#231a1aff' }}>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<AuthPage />} />
          
          {/* Optional: 404 page */}
          <Route path="*" element={<h1 style={{ textAlign: 'center', padding: '4rem' }}>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;