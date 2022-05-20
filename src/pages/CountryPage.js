import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SubpageNavbar from '../components/SubpageNavbar';
import style from './CountryPage.module.css';

const CountryPage = () => {
  const { country } = useParams();
  const [countryDetails, setCountryDetails] = useState(null);

  useEffect(() => {
    fetch(`https://corona.lmao.ninja/v3/covid-19/countries/${country}`)
      .then((response) => response.json())
      .then((data) => {
        setCountryDetails(data);
      });
  });

  return (
    <>
      <SubpageNavbar />
      {countryDetails
        ? (
          <>
            <div className={style.countryHeader}>
              <div className={style.countryFlagName}>
                <img src={countryDetails.countryInfo.flag} alt={countryDetails.country} />
                <div>
                  <h2>{countryDetails.country}</h2>
                  <h5>{`Population: ${countryDetails.population}`}</h5>
                </div>
              </div>
            </div>
            <div>
              <div className={style.detailItem}>
                <h3>Cases</h3>
                <h3>{countryDetails.cases}</h3>
              </div>
              <div className={style.detailItem}>
                <h3>Recovered</h3>
                <h3>{countryDetails.recovered}</h3>
              </div>
              <div className={style.detailItem}>
                <h3>Active</h3>
                <h3>{countryDetails.active}</h3>
              </div>
              <div className={style.detailItem}>
                <h3>Critical</h3>
                <h3>{countryDetails.critical}</h3>
              </div>
              <div className={style.detailItem}>
                <h3>Tests</h3>
                <h3>{countryDetails.tests}</h3>
              </div>
              <div className={style.detailItem}>
                <h3>TestsPerOneMillion</h3>
                <h3>{countryDetails.testsPerOneMillion}</h3>
              </div>
              <div className={style.detailItem}>
                <h3>OneCasePerPeople</h3>
                <h3>{countryDetails.oneCasePerPeople}</h3>
              </div>
              <div className={style.detailItem}>
                <h3>OneDeathPerPeople</h3>
                <h3>{countryDetails.oneDeathPerPeople}</h3>
              </div>
              <div className={style.detailItem}>
                <h3>OneTestPerPeople</h3>
                <h3>{countryDetails.oneTestPerPeople}</h3>
              </div>
              <div className={style.detailItem}>
                <h3>ActivePerOneMillion</h3>
                <h3>{countryDetails.activePerOneMillion}</h3>
              </div>
              <div className={style.detailItem}>
                <h3>RecoveredPerOneMillion</h3>
                <h3>{countryDetails.recoveredPerOneMillion}</h3>
              </div>
              <div className={style.detailItem}>
                <h3>CriticalPerOneMillion</h3>
                <h3>{countryDetails.criticalPerOneMillion}</h3>
              </div>
            </div>
          </>
        )
        : <h2>Loading...</h2>}
    </>
  );
};

export default CountryPage;
