import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../common/Button';
import { getTelLink, BUSINESS_CONFIG } from '../../utils/contactLinks';

export const MobileMenu = ({ isOpen, onClose, navItems }) => {
  return (
    <nav
      className={`nav-links ${isOpen ? 'open' : ''}`}
      id="nav-links"
      aria-label="Mobile Navigation Drawer"
      aria-hidden={!isOpen}
    >
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={onClose}
          end={item.path === '/'}
        >
          {item.name}
        </NavLink>
      ))}

      <div className="mobile-drawer-cta">
        <Button href={getTelLink()} variant="outline" size="sm" block>
          Call: {BUSINESS_CONFIG.phoneDisplay}
        </Button>
      </div>
    </nav>
  );
};

export default MobileMenu;
