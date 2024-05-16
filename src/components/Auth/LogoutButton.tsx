import React from 'react';
import { useAuth } from '../hooks/useAuth';

const LogoutButton: React.FC = () => {
  const { clearToken } = useAuth();
  const handleLogout = () => {
    clearToken();
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
