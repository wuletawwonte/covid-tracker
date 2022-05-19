import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Bars } from 'react-loading-icons';
import { getCountries } from '../redux/countries/countries';
import style from './Countries.module.css';

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
    content = (
      <div>
        {currentCountries.countries.map((country) => (
          <div key={country.name} className={style.countryItem}>
            <h2>{country.name}</h2>
            <div className={style.countryStats}>
              <h3>{`${country.deaths}`}</h3>
              <Link to={`/country/${country.name}`} type="button" className={style.details}><FaRegArrowAltCircleRight className="nextIcon" /></Link>
            </div>
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
