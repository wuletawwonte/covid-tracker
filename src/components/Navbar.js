import React from 'react';
import { useSelector } from 'react-redux';
import { FaBars, FaAdjust } from 'react-icons/fa';
import style from './Navbar.module.css';

export default function Navbar() {
  const theme = useSelector((state) => state.themes.theme);
  const myStyle = {
    backgroundColor: theme.navbarBg,
  };

  return (
    <>
      <header className={style.header} style={myStyle}>
        <FaBars className={style.nbIcon} />
        <h1>Covid Tracker</h1>
        <div className={style.navbarRight}>
          <FaAdjust className={style.nbIconWithText} />
          <h3>Theme</h3>
        </div>
      </header>
    </>
  );
}
