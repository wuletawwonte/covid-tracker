import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CountriesNavbar from '../components/CountriesNavbar';

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
      <CountriesNavbar />
      <h2>Country page</h2>
      <h2>{country}</h2>
      <h2>{JSON.stringify(countryDetails)}</h2>
    </>
  );
};

export default CountryPage;
