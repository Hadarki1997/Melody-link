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
              {field.type === 'select' ? (
                <select
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  className="custom-select"
                >
                  {field.options.map((option, i) => (
                    <option key={i} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required={field.required}
                />
              )}
            </div>
          ))}
          
          <button type="submit" className="btn-primary">
            {buttonText}
          </button>

          {additionalLink && (
            <p>
              {additionalLink.text}{' '}
              <Link to={additionalLink.href}>{additionalLink.linkText}</Link>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AuthFormRight;
