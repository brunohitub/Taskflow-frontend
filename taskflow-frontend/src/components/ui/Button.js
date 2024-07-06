// src/components/ui/Button.js
import React from 'react';
import classNames from 'classnames';

const Button = ({ variant, className, children, ...props }) => {
  const buttonClass = classNames(
    'inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2',
    {
      'bg-blue-500 text-white hover:bg-blue-600': variant === 'primary',
      'bg-gray-200 text-gray-800 hover:bg-gray-300': variant === 'secondary',
      'bg-transparent text-gray-800 hover:bg-gray-100': variant === 'ghost',
    },
    className
  );

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
