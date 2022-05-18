import React, { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loading-icons';
import style from './WorldWidget.module.css';

const WorldWidget = () => {
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
    <div className={style.worldStatsContianer}>
      <img src="images/World.png" alt="World map" className={style.worldMap} />
      <div className={style.worldStats}>
        <h3>World Widget</h3>
        {deathData ? (
          <h4>
            {`${deathData} `}
            Deaths
          </h4>
        ) : <h4><ThreeDots className={style.loadingIcon} /></h4>}
      </div>
    </div>
  );
};

export default WorldWidget;
