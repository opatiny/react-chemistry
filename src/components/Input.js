import React, { useState } from 'react';

export default function Input(props) {
  // this is a component state
  const [state, setState] = useState({
    input: '',
  });

  function onSubmit(event) {
    event.preventDefault(); // ?
    props.setMF(state.input);
    setState({ input: '' });
  }

  function handleNewEntry(event) {
    setState({ [event.target.name]: event.target.value });
  }

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex' }}>
      <input
        type="text"
        name="input"
        style={{ flex: '10', padding: '5px' }}
        placeholder="Enter a simple organic molecular formula ..."
        value={state.input}
        onChange={handleNewEntry}
      />
      <input
        type="submit"
        value="Submit"
        className="button"
        style={{ flex: '1' }}
      />
    </form>
  );
}
