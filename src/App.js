import React from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';

import { DISHES } from './shared/dishes';
import Menu from './components/MenuComponent'

function App() {

  const state = {
    dishes: DISHES
  }
  return (
    <div className="App">
      <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Mehul Patni</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={state.dishes}/>
    </div>
  );
}

export default App;



{/* <header className="App-header">
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
</header> */}