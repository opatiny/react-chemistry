import React from 'react';
import { MF } from 'react-mf';

export default function ShowMF(props) {
  return (
    <div style={mfStyle}>
      <style>
        {`.mfTxtStyle {
                font-weight: bold;
                font-size: 20;
              }`}
      </style>

      <MF className="mfTxtStyle" mf={props.mf} />
    </div>
  );
}

const mfStyle = {
  background: '#f4f4f4',
  padding: '20px',
  borderBottom: '1px solid #ccc ',
  textAlign: 'center',
};
