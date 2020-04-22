import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './components/About';
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
    <Router>
      <div className="App">
        <Header />
        <Route
          exact
          path="/react-mol-structures"
          render={() => (
            <React.Fragment>
              <Input setMF={setMF} />
              <ShowMF mf={mf} />
              <Content content={content} idCodes={idCodes} />
            </React.Fragment>
          )}
        />
        <Route path="/react-mol-structures/about" component={About} />
      </div>
    </Router>
  );
}
