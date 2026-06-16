import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Skip API call for now, just navigate to dashboard
    navigate('/admin/dashboard');
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px', padding: '2rem', border: '1px solid #333', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center', color: 'white' }}>Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '0.75rem', border: '1px solid #333', borderRadius: '4px', marginBottom: '1rem', background: '#1a1a1a', color: 'white' }}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '0.75rem', border: '1px solid #333', borderRadius: '4px', marginBottom: '1.5rem', background: '#1a1a1a', color: 'white' }}
          required
        />
        <button type="submit" style={{ width: '100%', background: 'var(--gold)', color: 'black', padding: '0.75rem', borderRadius: '4px', fontWeight: 'bold' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
