import React from 'react';
import { FaAngleLeft, FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import style from './CountriesNavbar.module.css';

export default function CountriesNavbar() {
  const navigate = useNavigate();

  return (
    <>
      <header className={style.header}>
        <FaAngleLeft className={style.nbIcon} onClick={() => navigate(-1)} />
        <h1>Covid Tracker</h1>
        <div className={style.navbarRight}>
          <FaCog className={style.nbIcon} />
        </div>
      </header>
    </>
  );
}
