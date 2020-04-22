import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Input from './components/Input';
import Molecules from './components/Molecules';
import ShowMF from './components/ShowMF';

import './App.css';
import getIdCodes from './getIdCodes';

function App() {
  const [mf, setMF] = useState('');
  const [idCodes, setIdCodes] = useState([]);

  useEffect(() => {
    if (mf) getIdCodes(mf).then((results) => setIdCodes(results));
  }, [mf]); // the callback is executed only if mf changes

  return (
    <div className="App">
      <Header />
      <Input setMF={setMF} />
      <ShowMF mf={mf} />
      <Molecules idCodes={idCodes} />
    </div>
  );
}

export default App;
