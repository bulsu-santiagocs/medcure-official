import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Management from './pages/Management';
import Notification from './pages/Notification';
import PointOfSales from './pages/PointOfSales';
import Contacts from './pages/Contacts';
import Settings from './pages/Settings';
import LoginPage from './pages/LoginPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  return (
    <div className="flex h-screen bg-gray-200">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 p-6 overflow-auto bg-gradient-to-br from-white to-gray-100">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/management" element={<Management />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/point-of-sales" element={<PointOfSales />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;