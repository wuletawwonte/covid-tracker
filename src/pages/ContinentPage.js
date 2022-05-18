import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Widget from '../components/Widget';

const ContinentPage = () => {
  const { continent } = useParams();
  const [deathData, setDeathData] = useState(null);

  useEffect(() => {
    fetch(`https://corona.lmao.ninja/v3/covid-19/continents/${continent}`)
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
      <Widget location={continent} death={deathData} />
      <h2>
        HEllo
        {continent}
      </h2>
    </>
  );
};

export default ContinentPage;
