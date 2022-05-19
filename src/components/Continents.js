import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Bars } from 'react-loading-icons';
import { getContinents } from '../redux/continents/continents';
import ContinentWidget from './ContinentWidget';
import style from './Continents.module.css';

const Continents = () => {
  const continents = useSelector((state) => state.continents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContinents());
  }, []);

  let content;
  if (continents.status === 'LOADING') {
    content = (
      <div className={style.loadingIcon}>
        <Bars stroke="var(--primary)" fill="var(--primary" height="3rem" />
        <h4>Loading...</h4>
      </div>
    );
  } else if (continents.status === 'SUCCESS') {
    content = (
      <div className={style.continents}>
        {continents.continents.map((continent) => (
          <ContinentWidget
            key={continent.name}
            name={continent.name}
            deaths={continent.deaths}
            countries={continent.countries}
          />
        ))}
      </div>
    );
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
