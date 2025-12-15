import { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
  </div>
);

// Client pages
const ClientScanner = lazy(() => import('./pages/client/Scanner'));
const ClientExchangeForm = lazy(() => import('./pages/client/ExchangeForm'));
const ClientExchangeSuccess = lazy(() => import('./pages/client/ExchangeSuccess'));
const ClientTracking = lazy(() => import('./pages/client/Tracking'));
const ClientExchangeList = lazy(() => import('./pages/client/ExchangeList'));
const ClientExchangeDetail = lazy(() => import('./pages/client/ExchangeDetail'));
const ClientChat = lazy(() => import('./pages/client/Chat'));

function App() {
  return (
    <Router basename="/Swapp-client">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Navigate to="/scan" replace />} />
          <Route path="/scan" element={<ClientScanner />} />
          <Route path="/exchange/new" element={<ClientExchangeForm />} />
          <Route path="/success/:code" element={<ClientExchangeSuccess />} />
          <Route path="/tracking/:code" element={<ClientTracking />} />
          <Route path="/exchanges" element={<ClientExchangeList />} />
          <Route path="/exchange/:id" element={<ClientExchangeDetail />} />
          <Route path="/chat/:exchangeId" element={<ClientChat />} />
          <Route path="/chat" element={<ClientChat />} />
          <Route path="*" element={<Navigate to="/scan" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
