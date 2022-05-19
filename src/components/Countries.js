import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Bars } from 'react-loading-icons';
import { getCountries } from '../redux/countries/countries';
import style from './Countries.module.css';

const Countries = (props) => {
  const continents = useSelector((state) => state.continents.continents);
  const currentCountries = useSelector((state) => state.countries);
  const { location } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    const { countries } = continents.find((cont) => cont.name === location);
    dispatch(getCountries(countries));
  }, []);

  let content;
  if (currentCountries.status === 'LOADING') {
    content = (
      <div className="loadingIcon">
        <Bars stroke="var(--primary)" fill="var(--primary" height="3rem" />
        <h4>Loading...</h4>
      </div>
    );
  } else if (currentCountries.status === 'SUCCESS') {
    content = (
      <div>
        {currentCountries.countries.map((country) => (
          <div key={country.name} className={style.countryItem}>
            <h2>{country.name}</h2>
            <h2>{country.deaths}</h2>
          </div>
        ))}
      </div>
    );
  } else {
    content = (
      <h2>
        Error:
        {currentCountries.errMsg}
      </h2>
    );
  }

  return (<>{content}</>);
};

Countries.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Countries;
