// src/pages/logoutpage.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('user');
    navigate('/login');
  }, [navigate]);

  return null; // You can return some UI or a loading indicator if needed
};

export default LogoutPage;
