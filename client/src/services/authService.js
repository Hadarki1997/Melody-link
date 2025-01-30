import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/auth';

// פונקציה להרשמת משתמש חדש
export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData); // שולח גם את userType
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};


// פונקציה להתחברות משתמש קיים
export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

// פונקציה לבדוק אם המשתמש מחובר
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

// פונקציה להתנתקות
export const logout = () => {
  localStorage.removeItem('user');
};
