import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import style from './FilteredCountries.module.css';

const FilteredCountries = (props) => {
  const { countries } = props;
  const theme = useSelector((state) => state.themes.theme);
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
      <div className={style.searchContainer} style={{ backgroundColor: theme.heroBg }}>
        <input type="text" value={searchKey} className={style.search} placeholder="search..." onChange={handleChange} />
      </div>

      {allCountries.map((country, index) => (
        <div
          key={country.name}
          className={style.countryItem}
          style={{ backgroundColor: index % 2 === 0 ? theme.widgetBgLight : theme.widgetBgDark }}
        >
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
  countries: PropTypes.arrayOf({ name: PropTypes.string, deaths: PropTypes.number }).isRequired,
};

export default FilteredCountries;
