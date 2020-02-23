import React from 'react';

import './Button.less';

const Button = ({ ghost, type, disabled, children, onClick }) => {
  let className = 'btn';

  if (ghost) {
    className += ' btn-ghost';
  }
  
  switch (type) { 
    case 'success': className +=' btn-success'; break;
    case 'warning': className +=' btn-warning'; break;
    case 'danger': className +=' btn-danger'; break;
  };

  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      <div className="btn-content">
        {children}
      </div>
    </button>
  )
};

export default Button;