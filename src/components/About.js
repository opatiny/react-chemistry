import React from 'react';

// the <React.Fragment> tag is a tag that is empty -> it corresponds to nothing in the DOM
export default function About() {
  return (
    <React.Fragment>
      <div style={aboutStyle}>
        <h1>About</h1>
        <p>Molecular structures calculator app</p>
        <p>Version: v1.0.0</p>
        <p>
          Github repository:{' '}
          <a
            className="link"
            href="https://github.com/opatiny/react-mol-structures"
          >
            https://github.com/opatiny/react-mol-structures
          </a>
        </p>
      </div>
    </React.Fragment>
  );
}

const aboutStyle = {
  padding: '10px',
};
