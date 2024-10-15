import React from 'react';
import './Footer.css';
import config from '../Config';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} {config.companyShortName}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;