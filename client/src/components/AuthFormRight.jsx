import React from 'react';
import { Link } from 'react-router-dom';


const AuthFormRight = ({
  title,
  subtitle,
  fields,
  formData,
  handleChange,
  handleSubmit,
  buttonText,
  additionalLink,
}) => {
  return (
    <div className="auth-right">
      <div className="auth-form">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <form onSubmit={handleSubmit}>
          {fields.map((field, index) => (
            <div className="form-group" key={index}>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                required={field.required}
              />
            </div>
          ))}
          {title === 'LOGIN' && (
            <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/forgot-password">Forgot Password</Link>
          </div>
          )}
          <button type="submit" className="btn-primary">
            {buttonText}
          </button>
          {title === 'LOGIN' && (
            <button type="button" className="btn-google">
              Sign in with Google
            </button>
          )}
        </form>
        {additionalLink && (
          <p>
            {additionalLink.text}{' '}
            <a href={additionalLink.href}>{additionalLink.linkText}</a>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthFormRight;
