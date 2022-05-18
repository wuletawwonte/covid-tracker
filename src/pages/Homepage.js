import React, { useEffect, useState } from 'react';
import BodyTitleBar from '../components/BodyTitleBar';
import Continents from '../components/Continents';
import Widget from '../components/Widget';

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
      <BodyTitleBar title="Continental Death Stats" />
      <Continents />
    </>
  );
};

export default Homepage;
