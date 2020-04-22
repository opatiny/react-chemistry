// function-based component! (vs class-based components)

import React from 'react';

import Molecules from './Molecules';

export default function Content(props) {
  switch (props.content) {
    case 'molecules':
      return <Molecules idCodes={props.idCodes} />;
    case 'error':
      return <p style={errorStyle}>ERROR: Invalid molecular formula</p>;
    case 'loading':
      return <p style={loadingStyle}>Loading...</p>;
    default:
      break;
  }
}

const errorStyle = {
  color: 'red',
  fontSize: '20px',
  textAlign: 'center',
  padding: '10px',
  fontWeight: 'bold',
};

const loadingStyle = {
  fontSize: '20px',
  textAlign: 'center',
  padding: '10px',
  fontWeight: 'bold',
};
