import React from 'react';

export default function Header() {
  return (
    <header style={headerStyle}>
      <div>
        <h1>Molecular structures calculator</h1>
      </div>
    </header>
  );
}

const headerStyle = {
  background: '#334',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
};
