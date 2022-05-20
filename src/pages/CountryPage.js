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
                <h2>{countryDetails.country}</h2>
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
            </div>
          </>
        )
        : <h2>Loading...</h2>}
    </>
  );
};

export default CountryPage;
