import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SubpageNavbar from '../components/SubpageNavbar';
import style from './CountryPage.module.css';

const CountryPage = () => {
  const { country } = useParams();
  const [countryDetails, setCountryDetails] = useState({});

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
      <div className={style.countryHeader}>
        <h2>Country page</h2>
      </div>
      <h2>{country}</h2>
      <h2>{JSON.stringify(countryDetails)}</h2>
    </>
  );
};

export default CountryPage;
