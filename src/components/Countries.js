import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Bars } from 'react-loading-icons';
import { getCountries } from '../redux/countries/countries';
import FilteredCountries from './FilteredCountries';

const Countries = (props) => {
  const currentCountries = useSelector((state) => state.countries);
  const { location } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries(location));
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
    content = <FilteredCountries countries={currentCountries.countries} />;
  } else {
    content = (
      <h2>
        Error:
        {currentCountries.errMsg}
      </h2>
    );
  }

  return (
    <>
      {content}
    </>
  );
};

Countries.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Countries;
