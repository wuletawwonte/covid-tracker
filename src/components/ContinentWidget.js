import React from 'react';
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
    </div>
  );
};

ContinentWidget.propTypes = {
  name: PropTypes.string.isRequired,
  deaths: PropTypes.number.isRequired,
};

export default ContinentWidget;
