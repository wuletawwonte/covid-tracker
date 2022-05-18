import React, { useEffect, useState } from 'react';
import Continents from '../components/Continents';
import Widget from '../components/Widget';
import style from './Homepage.module.css';

const Homepage = () => {
  const [deathData, setDeathData] = useState(null);

  useEffect(() => {
    fetch('https://corona.lmao.ninja/v3/covid-19/all')
      .then((response) => response.json())
      .then((data) => {
        setDeathData(data.deaths);
      })
      .catch((err) => {
        setDeathData(err.message);
      });
  }, []);

  return (
    <>
      <Widget death={deathData} location="World" />
      <div className={style.continentsHeader}>
        <h2>Continental Death Stats</h2>
      </div>
      <Continents />
    </>
  );
};

export default Homepage;
