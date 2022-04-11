import React from 'react';
import './NavBar.css';
import CartWidget from './CartWidget';

const NavBar = ({ links}) => {

  return (
    <>
      <header>
        <a className='brand' href="index.html"> <img src="./img/caja-de-carton.png" alt="Logo" className='logo' /></a>
        <nav>
          
          { 
            links.map((link) => {
            return <a key={link.id} href={link.tag}> {link.name}</a>
            })
          
          }

          <CartWidget />
        
        </nav>
      </header>  
    </>
  );
};

export default NavBar;