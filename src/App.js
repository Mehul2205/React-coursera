import React from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
          <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;



/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */