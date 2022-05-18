import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import style from './ContinentWidget.module.css';

const ContinentWidget = (props) => {
  const { name, deaths } = props;
  return (
    <div className={style.continent}>
      <img className={style.continentImage} src={`/images/${name}.png`} alt={name} />
      <div className={style.text}>
        <h3>{name}</h3>
        <h4>{deaths}</h4>
      </div>
      <Link to={`/continent/${name}`} type="button" className={style.details}><FaRegArrowAltCircleRight className={style.nextIcon} /></Link>
    </div>
  );
};

ContinentWidget.propTypes = {
  name: PropTypes.string.isRequired,
  deaths: PropTypes.number.isRequired,
};

export default ContinentWidget;
