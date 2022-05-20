import React from 'react';
import { ThreeDots } from 'react-loading-icons';
import PropTypes from 'prop-types';
import style from './Widget.module.css';

const Widget = (props) => {
  const { death, location } = props;

  return (
    <div className={style.worldStatsContianer}>
      <div className={style.mapContainer}>
        <img src={`/images/${location}.png`} alt={location} className={style.worldMap} />
      </div>
      <div className={style.worldStats}>
        <h3>
          {location}
          {' '}
          Data
        </h3>
        {death ? (
          <h4>
            {`${death} `}
            Deaths
          </h4>
        ) : <h4><ThreeDots className={style.loadingIcon} /></h4>}
      </div>
    </div>
  );
};

Widget.propTypes = {
  death: PropTypes.string,
  location: PropTypes.string.isRequired,
};

Widget.defaultProps = {
  death: null,
};

export default Widget;
