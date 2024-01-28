import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, icon, className }) => {
  return (
    <button className={`flex items-center justify-center p-2 ${className}`}>
      <span className=" mr-1">{icon}</span>
      <span className='mr-2'>{label}</span>
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  className: PropTypes.string, // className is optional
};

export default Button;
