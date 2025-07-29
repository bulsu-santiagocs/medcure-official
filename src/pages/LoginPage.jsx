import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/client';
import logo from '../assets/images/logo-transparent.png';

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      onLogin();
      navigate('/');
    } catch (error) {
      alert(error.error_description || error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-100 font-sans">
      <div className="w-full max-w-lg p-12 space-y-8 bg-white rounded-2xl shadow-xl">
        <div className="flex justify-center">
          <img src={logo} alt="MedCure Logo" className="h-15 w-15" />
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-light text-gray-800">
            Welcome Back
          </h2>
          <p className="mt-2 text-lg text-gray-500">
            Please enter your email and password to log in.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}>
          <div className="relative">
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-4 py-3 text-lg text-gray-800 bg-gray-100 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full px-4 py-3 text-lg text-gray-800 bg-gray-100 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-between items-center py-4 px-6 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset- focus:ring-blue-500"
            >
              <span>Continue</span>
              <span>&rarr;</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;