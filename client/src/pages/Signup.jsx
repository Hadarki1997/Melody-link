import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { signup } from '../services/authService';

const Signup = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [userType, setUserType] = useState('singer'); // ברירת מחדל - זמר
  const [instrument, setInstrument] = useState(''); // 🎸 כלי נגינה (רק לנגנים)


  const handleSignupSubmit = async (formData) => {
    setError('');
    setSuccess(false);

    const userData = {
      ...formData,
      userType,
      role: 'user', // כאן מתווסף ה-role אם הקליינט לא שולח
      instrument: userType === 'musician' ? instrument : undefined // נשלח רק אם המשתמש מוזיקאי
    };

    console.log("📩 Debug - Data being sent:", userData);

    try {
      const response = await signup(userData);
      console.log('✅ Signup successful:', response);
      setSuccess(true);
    } catch (err) {
      console.error('❌ Signup error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <AuthForm
        title="SIGN UP"
        subtitle="Create your account to get started"
        fields={[
          { name: 'name', type: 'text', placeholder: 'Enter your name', required: true },
          { name: 'email', type: 'email', placeholder: 'Enter your email', required: true },
          { name: 'password', type: 'password', placeholder: 'Enter your password', required: true },
          {
            name: 'userType',
            type: 'select',
            required: true,
            options: [
              { value: '', label: 'Select user type' },
              { value: 'singer', label: 'Singer' },
              { value: 'musician', label: 'Musician' },
            ],
          },
          ...(userType === 'musician' 
            ? [{ name: 'instrument', type: 'text', placeholder: 'Enter instrument', required: true }]
            : []
          ),
        ]}
        buttonText="Sign Up"
        onSubmit={handleSignupSubmit}
        userType={userType}
        setUserType={setUserType}
        instrument={instrument}
        setInstrument={setInstrument}
      />

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {success && <p style={{ color: 'green', textAlign: 'center' }}>Signup successful! Redirecting...</p>}
    </>
  );
};

export default Signup;
