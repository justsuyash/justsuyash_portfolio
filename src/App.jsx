import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import VentureLabPage from './pages/VentureLabPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import LabPage from './pages/LabPage';

function App() {
  return (
    <Router>
      <div style={{ width: '100%', minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ventures" element={<VentureLabPage />} />
          <Route path="/lab" element={<LabPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <footer style={{
          padding: '48px 0',
          textAlign: 'center',
          fontSize: '0.875rem',
          color: 'rgba(255,255,255,0.3)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          marginTop: '80px'
        }}>
          <p>© {new Date().getFullYear()} Suyash. Built with intent.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
