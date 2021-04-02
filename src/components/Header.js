import React from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../images/logos/WhiteLogo.png'

function Header() {

  const history = useHistory();

  function handleRedirect(location) {
    history.push(location)
  }

  return (
    <div className="Header">
      <div className="header-item">
        <h2 onClick={() => handleRedirect('/shop')}>SHOP</h2>
        <h2 onClick={() => handleRedirect('/faq')}>FAQ</h2>
      </div>
      <div className="header-item logo" onClick={() => handleRedirect('/')}>
        <img src={Logo} alt="mydrugs logo"/>
      </div>
      <div className="header-item">
        <h2 onClick={() => handleRedirect('/safety')}>SAFETY</h2>
        <h2 onClick={() => handleRedirect('/contact')}>CONTACT</h2>
      </div>
    </div>
  );
}

export default Header;
