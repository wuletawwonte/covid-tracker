import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Oval } from 'react-loading-icons';
import { getContinents } from '../redux/continents/continents';
import ContinentWidget from './ContinentWidget';

const Continents = () => {
  const continents = useSelector((state) => state.continents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContinents());
  }, []);

  let content;
  if (continents.status === 'LOADING') {
    content = <Oval stroke="var(--primary)" fill="var(--primary" height="2rem" />;
  } else if (continents.status === 'SUCCESS') {
    content = continents.continents.map((continent) => (
      <ContinentWidget
        key={continent.name}
        name={continent.name}
        deaths={continent.deaths}
      />
    ));
  } else {
    content = (
      <h2>
        Error:
        {continents.errMsg}
      </h2>
    );
  }

  return (<>{content}</>);
};

export default Continents;
