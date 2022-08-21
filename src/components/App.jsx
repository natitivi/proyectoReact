import './App.css';
import React from 'react';
import Form from './Form';
import Cart from './Cart';
import Container from './Container';

const App = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Unnamed</a>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blog</a>
              </li>
            <Cart />
            </ul>
            <Form contBuscar="Items"/>
          </div>
        </div>
      </nav>
      <Container/>
    </>
  );
}

export default App;
