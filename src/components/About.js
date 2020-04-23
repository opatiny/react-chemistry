import React from 'react';
import './About.css';

// the <React.Fragment> tag is a tag that is empty -> it corresponds to nothing in the DOM
export default function About() {
  return (
    <div className="aboutStyle">
      <h1>About</h1>
      <p>Structural isomers calculator app</p>
      <p>Version: v1.0.0</p>
      <p>This app only accepts organic molecules.</p>
      <p>
        We are aware that some of the results of the calculator are impossible
        isomers (for instance with azotes). This is caused by the tool used to
        generate them (M. M. Jaghoori et al., ‘PMG: Multi-core metabolite
        identification’, Electron. Notes Theor. Comput. Sci., vol. 299, pp.
        53–60, 2013.).
      </p>
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
  );
}
