import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import { useAuth } from '../hooks/useAuth';
import logo from "../../assets/B2Bit Logo.png";

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  // const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const {data} = await login(email, password);
      // setToken(response.data.access_token);
      localStorage.setItem("@token", JSON.stringify(data.tokens.access));
      console.log(data.tokens.access);
      navigate('/home');
    } catch (error) {
      setError('Invalid credentials');
    }
  };

  return (
    <div>
      <img src={logo} alt="" />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
