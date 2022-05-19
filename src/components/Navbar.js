import React from 'react';
import { FaBars, FaCog, FaMicrophone } from 'react-icons/fa';
import style from './Navbar.module.css';

export default function Navbar() {
  return (
    <>
      <header className={style.header}>
        <FaBars className={style.nbIcon} />
        <h1>Covid Tracker</h1>
        <div className={style.navbarRight}>
          <FaMicrophone className={style.nbIcon} />
          <FaCog className={style.nbIcon} />
        </div>
      </header>
    </>
  );
}
