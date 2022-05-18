import React from 'react';
import PropTypes from 'prop-types';

const ContinentWidget = (props) => {
  const { name, deaths } = props;
  return (
    <div>
      <img src={`../assets/images/${name}`} alt="What the he" />
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
