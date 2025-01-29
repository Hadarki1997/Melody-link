import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { signup } from '../services/authService'; // ייבוא הפונקציה לשליחת בקשה ל-API

const Signup = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSignupSubmit = async (formData) => {
    setError('');
    setSuccess(false);

    try {
      const response = await signup(formData); // שליחת הנתונים ל-API
      console.log('Signup successful:', response);
      setSuccess(true);
    } catch (err) {
      console.error('Signup error:', err);
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
        ]}
        buttonText="Sign Up"
        onSubmit={handleSignupSubmit}
        additionalLink={{
          text: 'Already have an account?',
          linkText: 'Login',
          href: '/',
        }}
      />

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {success && <p style={{ color: 'green', textAlign: 'center' }}>Signup successful! Redirecting...</p>}
    </>
  );
};

export default Signup;
