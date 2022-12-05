import React, { useEffect, useState } from 'react';
import './NavBar.css';

function NavBar() {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', watchScroll);
    return () => window.removeEventListener('scroll', watchScroll);
  }, []);

  const watchScroll = () => {
    setShowBar(window.scrollY > 100);
  };

  return (
    <div className={`nav-container ${showBar && 'nav-container-black'}`}>
      <img
        className='nav-logo'
        src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
        alt='MegFlix'
      />
      <img
        className='nav-avatar'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU'
        alt='Megas Dev'
      />
    </div>
  );
}

export default NavBar;
