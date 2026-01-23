import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const VentureLabPage = lazy(() => import('./pages/VentureLabPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const LabPage = lazy(() => import('./pages/LabPage'));
const ExperimentationArchitecturePage = lazy(() => import('./pages/articles/ExperimentationArchitecturePage'));
const EmploymentVerificationPage = lazy(() => import('./pages/articles/EmploymentVerificationPage'));
const SandboxStrategyPage = lazy(() => import('./pages/articles/SandboxStrategyPage'));
const GenAiCopilotPage = lazy(() => import('./pages/articles/GenAiCopilotPage'));
const DecisionTreesPage = lazy(() => import('./pages/articles/DecisionTreesPage'));
const ArticlesPage = lazy(() => import('./pages/ArticlesPage'));

// Loading fallback component
const PageLoader = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    color: 'rgba(255,255,255,0.5)'
  }}>
    <div style={{
      width: '32px',
      height: '32px',
      border: '3px solid rgba(255,255,255,0.1)',
      borderTopColor: '#00f3ff',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite'
    }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); }}`}</style>
  </div>
);

function App() {
  return (
    <Router>
      <div style={{ width: '100%', minHeight: '100vh' }}>
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ventures" element={<VentureLabPage />} />
            <Route path="/lab" element={<LabPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/articles/experimentation-architecture" element={<ExperimentationArchitecturePage />} />
            <Route path="/articles/employment-verification" element={<EmploymentVerificationPage />} />
            <Route path="/articles/genai-copilot" element={<GenAiCopilotPage />} />
            <Route path="/articles/decision-trees" element={<DecisionTreesPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/sandbox-strategy" element={<SandboxStrategyPage />} />
          </Routes>
        </Suspense>

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

