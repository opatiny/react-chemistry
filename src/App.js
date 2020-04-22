import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Input from './components/Input';
import Molecules from './components/Molecules';
import ShowMF from './components/ShowMF';
import './App.css';
import getIdCodes from './components/getIdCodes';

export default function App() {
  const [mf, setMF] = useState('');
  const [mfValid, setMfValid] = useState(true);
  const [idCodes, setIdCodes] = useState([]);

  useEffect(() => {
    if (mf) {
      setMfValid(true);
      getIdCodes(mf, setMfValid)
        .then((results) => {
          setIdCodes(results);
        })
        .catch(() => setMfValid(false));
    }
  }, [mf]); // the callback is executed only if mf changes
  return (
    <div className="App">
      <Header />
      <Input setMF={setMF} />
      <ShowMF mf={mf} />
      {mfValid ? (
        <Molecules idCodes={idCodes} />
      ) : (
        <p style={errorStyle}>ERROR: Invalid molecular formula</p>
      )}
    </div>
  );
}

const errorStyle = {
  color: 'red',
  fontSize: '20px',
  textAlign: 'center',
  padding: '10px',
  fontWeight: 'bold',
};
