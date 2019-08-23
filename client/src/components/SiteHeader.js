import React from 'react';
import Search from './Search.js';


const SiteHeader = (props) => {
  return (
    <div className="header-container">
      <Search />
      <span id="brand">ANTHROPOLOGIE</span>
      <img src="../../dist/anthropologies-web-logo.png"></img>
      <div id="right-header">
        <a href="#" className="header-link">registry</a>
        <a href="#" className="header-link">usd: english</a>
        {/* <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div> */}
        <a href="#" className="header-link">sign in / sign up </a>
      </div>
    </div>
  )
}

export default SiteHeader;