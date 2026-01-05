import React from 'react';
import { Link } from 'react-router-dom';
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  href?: string;
  children: React.ReactNode;
  className?: string;
}
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  href,
  children,
  className = ''
}) => {
  const baseStyles = 'inline-block px-8 py-3 font-medium tracking-wider text-sm uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantStyles = {
    primary: 'bg-red-700 text-white hover:bg-red-800 focus:ring-red-500',
    secondary: 'bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10 focus:ring-white'
  };
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;
  if (href) {
    return <Link to={href} className={buttonClasses}>
        {children}
      </Link>;
  }
  return <button className={buttonClasses}>{children}</button>;
};