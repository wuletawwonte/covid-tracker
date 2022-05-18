import React from 'react';
import { useSelector } from 'react-redux';

const Continents = () => {
  const continents = useSelector((state) => state.continents.continents);

  console.log('continents: ', continents);

  return (<h2>Continents</h2>);
};

export default Continents;
