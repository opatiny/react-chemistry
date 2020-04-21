import React, { useState } from 'react';

import Header from './components/Header';
import Input from './components/Input';
import ShowMF from './components/ShowMF';

import './App.css';

function App() {
  const [mf, setMF] = useState('');

  return (
    <div className="App">
      <Header />
      <Input setMF={setMF} />
      <ShowMF mf={mf} />
    </div>
  );
}

export default App;
