import React from 'react';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render = () => (
    <>
      <header>
        <FaBars className="fabars-icon" />
        <h2>Navbar</h2>
      </header>
    </>
  )
}
