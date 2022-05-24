import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaBars, FaAdjust } from 'react-icons/fa';
import style from './Navbar.module.css';
import { changeTheme } from '../redux/themes/themes';

export default function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);
  const theme = useSelector((state) => state.themes.theme);
  const dispatch = useDispatch();
  const myStyle = {
    backgroundColor: theme.navbarBg,
  };

  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
  };

  const hideMenu = () => {
    setMenuToggle(false);
  };

  const handleClick = (e) => {
    dispatch(changeTheme(e.target.dataset.title));
    hideMenu();
  };
  /* eslint-disable */
  return (
    <>
      <header className={style.header} style={myStyle}>
        <FaBars className={style.nbIcon} />
        <h1>Covid Tracker</h1>
        <button type="button" className={style.navbarRight} onClick={toggleMenu} onBlur={hideMenu}>
          <FaAdjust className={style.nbIconWithText} />
          <h3>Theme</h3>
          { menuToggle
        && (
        <div className={style.dropDownMenu}>
          <ul>
            <li onClick={handleClick} data-title="Blue">Blue</li>
            <li onClick={handleClick} data-title="Pink">Pink</li>
          </ul>
        </div>
        ) }

        </button>
      </header>
    </>
  );
}
