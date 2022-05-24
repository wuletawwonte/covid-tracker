import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaBars, FaAdjust } from 'react-icons/fa';
import style from './Navbar.module.css';

export default function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);
  const theme = useSelector((state) => state.themes.theme);
  const myStyle = {
    backgroundColor: theme.navbarBg,
  };

  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <>
      <header className={style.header} style={myStyle}>
        <FaBars className={style.nbIcon} />
        <h1>Covid Tracker</h1>
        <button type="button" className={style.navbarRight} onClick={toggleMenu} onBlur={toggleMenu}>
          <FaAdjust className={style.nbIconWithText} />
          <h3>Theme</h3>
          { menuToggle
        && (
        <div className={style.dropDownMenu}>
          <ul>
            <li>Blue</li>
            <li>Pink</li>
            <li>Black</li>
          </ul>
        </div>
        ) }

        </button>
      </header>
    </>
  );
}
