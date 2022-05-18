import React from 'react';
import Continents from '../components/Continents';
import WorldWidget from '../components/WorldWidget';
import style from './Homepage.module.css';

const Homepage = () => (
  <>
    <WorldWidget />
    <div className={style.continentsHeader}>
      <h2>Continental Death Stats</h2>
    </div>
    <Continents />
  </>
);

export default Homepage;
