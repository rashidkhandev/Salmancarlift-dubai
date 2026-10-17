import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = ({ className = '', onClick }) => {
  return (
    <Link to="/" className={`brand ${className}`} onClick={onClick} aria-label="Salman Carlift Home">
      <span className="mark" aria-hidden="true">SC</span>
      <span>Salman <span className="gold">Carlift</span></span>
    </Link>
  );
};

export default Logo;
