import React from 'react';
import PropTypes from 'prop-types';
import style from './BodyTitleBar.module.css';

const BodyTitleBar = (props) => {
  const { title } = props;

  return (
    <div className={style.continentsHeader}>
      <h2>{title}</h2>
    </div>
  );
};

BodyTitleBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BodyTitleBar;
