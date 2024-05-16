import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { getProfile } from '../services/api';

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<any>(null);
  const { token, clearToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      if (token) {
        try {
          const response = await getProfile(token);
          setProfile(response.data);
        } catch (error) {
          clearToken();
          navigate('/login');
        }
      }
    };
    fetchProfile();
  }, [token, clearToken, navigate]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {profile.name}</h1>
      <img src={profile.picture} alt="Profile" />
      <button onClick={() => {
        clearToken();
        navigate('/login');
      }}>Logout</button>
    </div>
  );
};

export default Profile;
