import React from 'react';
import { FaBars, FaCog, FaMicrophone } from 'react-icons/fa';
import './Navbar.css';

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render = () => (
    <>
      <header>
        <FaBars className="nb-icon" />
        <h2>Navbar</h2>
        <div className="navbar-right">
          <FaMicrophone className="nb-icon" />
          <FaCog className="nb-icon" />
        </div>
      </header>
    </>
  )
}
