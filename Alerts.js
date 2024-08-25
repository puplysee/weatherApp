
import React from 'react';

const Alert = ({ message, type }) => {
  return (
    
    <div className={`alert alert-${type}`}>
      
      {message="geçerli bir şehir giriniz"}
    </div>
  );
};

export default Alert;