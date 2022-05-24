import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import style from './ContinentWidget.module.css';

const ContinentWidget = (props) => {
  const { name, deaths } = props;
  const theme = useSelector((state) => state.themes.theme);

  const continentStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.widgetBgLight,
    color: 'var(--white)',
    padding: '10px',
  };

  return (
    <div style={continentStyle}>
      <img className={style.continentImage} src={`/images/${name}.png`} alt={name} />
      <div className={style.text}>
        <h3>{name}</h3>
        <h4>{deaths}</h4>
      </div>
      <Link to={`/continent/${name}`} type="button" className={style.details}><FaRegArrowAltCircleRight className="nextIcon" /></Link>
    </div>
  );
};

ContinentWidget.propTypes = {
  name: PropTypes.string.isRequired,
  deaths: PropTypes.number.isRequired,
};

export default ContinentWidget;
