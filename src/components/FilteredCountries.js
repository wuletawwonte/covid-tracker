import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import style from './FilteredCountries.module.css';

const FilteredCountries = (props) => {
  const { countries } = props;
  const [allCountries, setAllCountries] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    setAllCountries(countries.filter((c) => c.name.includes(searchKey)));
  }, [searchKey]);

  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <div>
      <div className={style.searchContainer}>
        <input type="text" value={searchKey} className={style.search} placeholder="search..." onChange={handleChange} />
      </div>

      {allCountries.map((country) => (
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
};

FilteredCountries.propTypes = {
  countries: PropTypes.shape([]).isRequired,
};

export default FilteredCountries;
