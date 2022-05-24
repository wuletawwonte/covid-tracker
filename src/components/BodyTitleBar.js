import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const BodyTitleBar = (props) => {
  const { title } = props;
  const theme = useSelector((state) => state.themes.theme);

  const myStyle = {
    backgroundColor: theme.headerBg,
    color: 'var(--white)',
    padding: '5px 20px',
  };

  const myTitleStyle = {
    fontSize: '3vw',
    textTransform: 'uppercase',
  };

  return (
    <div style={myStyle}>
      <h2 style={myTitleStyle}>{title}</h2>
    </div>
  );
};

BodyTitleBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BodyTitleBar;
