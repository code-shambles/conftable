import React from 'react';

import './Button.less';

const Button = props => {
  let className = 'btn';

  if (props.ghost) {
    className += ' btn-ghost';
  }
  
  switch (props.type) { 
    case 'success': className +=' btn-success'; break;
    case 'warning': className +=' btn-warning'; break;
    case 'danger': className +=' btn-danger'; break;
  };

  return (
    <button className={className} onClick={props.onClick}>{props.children}</button>
  )
};

export default Button;