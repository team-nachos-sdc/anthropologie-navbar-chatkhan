import React, { Component } from 'react';
import Search from './Search.js';

export default class SiteHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      bagMoused: false,
      dropMoused: false

    }
    this.mouseOutDropdown = this.mouseOutDropdown.bind(this);
    this.mouseOverDropdown = this.mouseOverDropdown.bind(this);
    this.mouseOutBag = this.mouseOutBag.bind(this);
    this.mouseOverBag = this.mouseOverBag.bind(this);

  }

  mouseOutDropdown() {
    this.setState({ dropMoused: false });
  }
  mouseOverDropdown() {
    this.setState({ dropMoused: true });
  }
  mouseOutBag() {
    this.setState({ bagMoused: false });
  }

  mouseOverBag() {
    this.setState({ bagMoused: true });
  }

  render() {
    return (
      <div>
        <div className="header-container">
          <Search />
          <img id="brand" src={"./brand.png"} />
          <span id="right-header">
            <a href="#" className="header-link">registry</a>
            <span className="dropdown-language">
              <a href="#" className="header-link" onMouseOut={this.mouseOutDropdown} onMouseOver={this.mouseOverDropdown}>usd: english</a>
              <span >
                {this.state.dropMoused ? <img className="dropdownTriangle" src={'./Triangle.png'}></img> : <img className="dropdownTriangle" src={'./DownTriangle.png'}></img>}
              </span>
              <div className="language-dropdown-content">
                <div className="dropdown-content-column">
                  <div className="language-title" >Currency</div>
                  <div className="chosen-option" >USD</div>
                </div>
                <div className="dropdown-content-column">
                  <div className="language-title" >Language</div>
                  <div className="chosen-option" >English</div>
                  <div className="other-option" >French</div>
                </div>
              </div>
            </span>
            <a href="#" className="header-link">sign in / sign up </a>
            <span onMouseOut={this.mouseOutBag} onMouseOver={this.mouseOverBag}>
              {this.state.bagMoused ? <img className="shoppingBag" src={'./HoverBag.png'}></img> : <img className="shoppingBag" src={'./Bag.png'}></img>}
            </span>
          </span>
        </div>
      </div>
    )
  }
}
