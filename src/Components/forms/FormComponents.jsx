import React from 'react';
import '../../styles/FormComponent.css'

const FormComponent = ({ title, fields, onSubmit, children, onClose}) => {
  return (
    <form onSubmit={onSubmit}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>{title}</h2>
        <button type="button" onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            &#10005;
        </button>
      </div>
      {fields.map((field, index) => (
        <div key={index}>
          <input
            type={field.type}
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            required={field.required}
          />
        </div>
      ))}
      {children}
    </form>
  );
};

export default FormComponent;

