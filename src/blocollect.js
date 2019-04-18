import React, { Component } from 'react';
import logo from './logo.png';
import './blocollect.css';

class Blocollect extends Component {
  render() {
    return (
      <div className="Blocollect">
        <header className="Blocollect-header">
          <img src={logo} className="Blocollect-logo" alt="logo" />
          <p>
            Edit <code>src/blocollect.js</code> and save to reload.
          </p>
          <a
            className="Blocollect-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn to code for Kids
          </a>
        </header>
      </div>
    );
  }
}

export default Blocollect;
