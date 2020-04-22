import React from 'react';
import { IdcodeSvgRenderer } from 'react-ocl';

import './Molecules.css';

export default function Molecules(props) {
  return (
    <div className="molStyle">
      {props.idCodes.map((entry) => (
        <div key={entry.idCode} style={msStyle}>
          <IdcodeSvgRenderer idcode={entry.idCode} />
        </div>
      ))}
    </div>
  );
}

const msStyle = {
  background: '#f4f4f4',
  border: '1px solid #ccc',
};
