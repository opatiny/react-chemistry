import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>Structural isomers calculator</h1>
      <Link style={linkStyle} to="/react-mol-structures">
        Home
      </Link>{' '}
      |{' '}
      <Link style={linkStyle} to="/react-mol-structures/about">
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: '#334',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};
