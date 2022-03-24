import React, { useState } from 'react';
import images from '../../constants/images'
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='app__navbar'>
      <div className="app__navbar__logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app__navbar__links">
        <li className="p__opensans"><a href="#home" rel="noopener noreferrer">Home</a></li>
        <li className="p__opensans"><a href="#about" rel="noopener noreferrer">About</a></li>
        <li className="p__opensans"><a href="#menu" rel="noopener noreferrer">Menu</a></li>
        <li className="p__opensans"><a href="#awards" rel="noopener noreferrer">Awards</a></li>
        <li className="p__opensans"><a href="#contact" rel="noopener noreferrer">Contact</a></li>
      </ul>
      <div className="app__navbar__login">
        <a href="#login" className='p__opensans'>Log In / Register</a>
        <div />
        <a href="/" className='p__opensans'>Book Table</a>
      </div>
      <div className="app__navbar__smscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && <div className='app__navbar__smscreen__overlay flex__center slide-bottom'>
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
          <ul className="app__navbar__smscreen__links">
            <li className="p__opensans"><a href="#home" rel="noopener noreferrer">Home</a></li>
            <li className="p__opensans"><a href="#about" rel="noopener noreferrer">About</a></li>
            <li className="p__opensans"><a href="#menu" rel="noopener noreferrer">Menu</a></li>
            <li className="p__opensans"><a href="#awards" rel="noopener noreferrer">Awards</a></li>
            <li className="p__opensans"><a href="#contact" rel="noopener noreferrer">Contact</a></li>
          </ul>
        </div>}
      </div>
    </div>
  )
};

export default Navbar;
