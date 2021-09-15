import  React from 'react';

const Button = ({ visualClass, isShown, children, ...buttonProps }) => {
  const buttonClasses = ['button', `button-${visualClass}`,  isShown ? `button-active` : ''];
  return (
    <button {...buttonProps} className={buttonClasses.join(' ')}>
      {children}
    </button>
  );
};

export default Button;
