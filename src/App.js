import React, { useState, useEffect } from 'react';

import Content from './components/Content';
import Header from './components/Header';
import Input from './components/Input';
import ShowMF from './components/ShowMF';
import './App.css';
import getIdCodes from './components/getIdCodes';

export default function App() {
  const [mf, setMF] = useState('');
  const [content, setContent] = useState('molecules');
  const [idCodes, setIdCodes] = useState([]);

  useEffect(() => {
    if (mf) {
      setContent('loading');
      getIdCodes(mf, setContent)
        .then((results) => {
          setIdCodes(results);
          setContent('molecules');
        })
        .catch(() => setContent('error'));
    }
  }, [mf]); // the callback is executed only if mf changes
  return (
    <div className="App">
      <Header />
      <Input setMF={setMF} />
      <ShowMF mf={mf} />
      <Content content={content} idCodes={idCodes} />
    </div>
  );
}
