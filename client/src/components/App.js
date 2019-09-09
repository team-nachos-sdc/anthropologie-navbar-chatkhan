import React, { Component } from 'react';
import PromoHeader from './PromoHeader.js';
import SiteHeader from './SiteHeader.js';
import MainNavigation from './MainNavigation.js';
import '../styles/app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {


    }

  }
  render() {
    return (
      <div>
        <div id="body">
          <PromoHeader />
          <div id="full-topbar">
            <div id="content">

              <SiteHeader />
              <br></br>
              <MainNavigation />
            </div>
            <br></br>
          </div>
        </div>

        <div>
          {/* <img src={'./HoverSearch.png'}> </img> */}
        </div>
      </div>
    )
  }
}
