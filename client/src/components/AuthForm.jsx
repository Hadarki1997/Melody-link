import React, { useState } from 'react';
import AuthLeft from './AuthLeft';
import AuthFormRight from './AuthFormRight';

const AuthForm = ({ title, subtitle, fields, buttonText, onSubmit, additionalLink }) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="auth-container">
      <AuthLeft />
      <AuthFormRight
        title={title}
        subtitle={subtitle}
        fields={fields}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        buttonText={buttonText}
        additionalLink={additionalLink}
      />
    </div>
  );
};

export default AuthForm;
