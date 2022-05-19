import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getCountries } from '../redux/countries/countries';

const Countries = (props) => {
  const continents = useSelector((state) => state.continents.continents);
  const currentCountries = useSelector((state) => state.countries.countries);
  const { location } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    const { countries } = continents.find((cont) => cont.name === location);
    dispatch(getCountries(countries));
  }, []);

  return (
    <>
      <h2>{JSON.stringify(currentCountries)}</h2>
    </>
  );
};

Countries.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Countries;
