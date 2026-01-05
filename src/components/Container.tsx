import React from 'react';
interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
  noPadding?: boolean;
}
export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'lg',
  className = '',
  noPadding = false
}) => {
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1400px]',
    full: 'max-w-full'
  };
  const paddingClasses = noPadding ? '' : 'px-4 sm:px-6 md:px-8 lg:px-12';
  return <div className={`w-full ${sizeClasses[size]} mx-auto ${paddingClasses} ${className}`}>
      {children}
    </div>;
};