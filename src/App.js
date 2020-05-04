import React from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';

const store = ConfigureStore()

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
            <Main />
        </div>
      </BrowserRouter>
    </Provider>    
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