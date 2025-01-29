import React from 'react';
import AuthForm from '../components/AuthForm';

const Login = () => {
  const handleLoginSubmit = (formData) => {
    console.log('Login Data:', formData);
    // הוסיפי קריאה ל-API בעתיד
  };

  return (
    <AuthForm
      title="LOGIN"
      subtitle="Enter your email and password to access your account"
      fields={[
        { name: 'email', type: 'email', placeholder: 'Enter your email', required: true },
        { name: 'password', type: 'password', placeholder: 'Enter your password', required: true },
      ]}
      buttonText="Sign In"
      onSubmit={handleLoginSubmit}
      additionalLink={{
        text: "Don't have an account ?",
        linkText: 'Sign Up',
        href: '/signup',
      }}
    />
  );
};

export default Login;
