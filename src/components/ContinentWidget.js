import React from 'react';
import PropTypes from 'prop-types';
import style from './ContinentWidget.module.css';

const ContinentWidget = (props) => {
  const { name, deaths } = props;
  return (
    <div className={style.continent}>
      <img src={`/images/${name}.png`} alt={name} />
      <h2>{name}</h2>
      <h3>{deaths}</h3>
    </div>
  );
};

ContinentWidget.propTypes = {
  name: PropTypes.string.isRequired,
  deaths: PropTypes.string.isRequired,
};

export default ContinentWidget;
