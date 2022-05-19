import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Countries = (props) => {
  const continents = useSelector((state) => state.continents.continents);
  const { location } = props;

  useEffect(() => {
    const { countries } = continents.find((cont) => cont.name === location);
    
  }, []);

  return (
    <>
      <h2>Countries Page</h2>
    </>
  );
};

Countries.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Countries;
