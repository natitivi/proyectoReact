import React from 'react';
import Form from './Form';
import ItemListContainer from './ItemListContainer';
import CartWidget from './CartWidget';
import ItemCount from './ItemCount';


const NavBar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Unnamed</a>
            <div className="collapse navbar-collapse" id="navbarColor02">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Bracelets</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Earrings</a>
                </li>
              <CartWidget />
              <ItemCount />
              </ul>
              <Form contBuscar="Search product"/>
            </div>
          </div>
        </nav>
        <ItemListContainer/>
      </>
    );
}

export default NavBar;
