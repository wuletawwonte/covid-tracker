import React from 'react';
import { useSelector } from 'react-redux';
import { FaAngleLeft, FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import style from './SubpageNavbar.module.css';

export default function SubpageNavbar() {
  const theme = useSelector((state) => state.themes.theme);
  const navigate = useNavigate();

  return (
    <>
      <header className={style.header} style={{ backgroundColor: theme.navbarBg }}>
        <FaAngleLeft className={style.nbIcon} onClick={() => navigate(-1)} />
        <h1>Covid Tracker</h1>
        <div className={style.navbarRight}>
          <FaCog className={style.nbIcon} />
        </div>
      </header>
    </>
  );
}
