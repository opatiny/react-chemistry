import React from 'react';
import { MF } from 'react-mf';

export default function Input(props) {
  return (
    <div style={outputStyle}>
      <MF mf={props.mf} />
    </div>
  );
}

const outputStyle = {
  background: '#f4f4f4',
  padding: '20px',
  borderBottom: '1px solid #ccc ',
};
