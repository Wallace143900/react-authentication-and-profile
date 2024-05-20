import React, { useEffect, useState } from 'react';
import { getProfile } from '../services/api';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import CR7 from "../../assets/download.jpeg"

const Home: React.FC = () => {
  const [profile, setProfile] = useState<any>(null);
  const { token, clearToken } = useAuth();
  const navigate = useNavigate();

  console.log(token);

  useEffect(() => {
    // const fetchProfile = async () => {
    //   if (token) {
    //     try {
    //       const response = await getProfile(token);
    //       setProfile(response.data);
    //     } catch (error) {
    //       clearToken();
    //       navigate('/login');
    //     }
    //   }
    // };
    // fetchProfile();

    const loadingUse = async () => {
      const token = localStorage.getItem("@token");
      const convertedToken = token ? JSON.parse(token) : null;
      if (convertedToken) {
        try{
          const response = await getProfile();
          console.log(response);
          setProfile(response.data);
        }catch (error) {
          console.log(error);
        }
      }
    }
    loadingUse();
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }



  return (
    <div>
      <img src={CR7} alt="Profile" />
      <h1>{profile.name}</h1>
      <h2>{profile.email}</h2>
      <button onClick={() => {
        clearToken();
        navigate('/login');
      }}>Logout</button>
    </div>
  );
};

export default Home;
