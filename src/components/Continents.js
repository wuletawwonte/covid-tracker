import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContinents } from '../redux/continents/continents';

const Continents = () => {
  const continents = useSelector((state) => state.continents.continents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContinents());
  }, []);

  console.log('continents: ', continents);

  return (<h2>Continents</h2>);
};

export default Continents;
