import React from 'react';

// components

import MenuLinks from './../MenuLinks';
import MenuButton from './../MenuButton';

const TopMenu = ({ rockets, isMenuOpen, isMobileView, toggleMenu }) => (
  <div className='col d-flex justify-content-between align-items-center position-absolute'>
    <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    {!isMobileView && <MenuLinks rockets={rockets} toggleMenu={toggleMenu} />}
  </div>
);

export default TopMenu;
