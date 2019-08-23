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
    console.log("Mouse out!!!");
    this.setState({ dropMoused: false });
  }

  mouseOverDropdown() {
    console.log("Mouse over!!!");
    this.setState({ dropMoused: true });
  }
  mouseOutBag() {
    console.log("Mouse out!!!");
    this.setState({ bagMoused: false });
  }

  mouseOverBag() {
    console.log("Mouse over!!!");
    this.setState({ bagMoused: true });
  }

  render() {
    return (
      <div className="header-container">
        <Search />
        <img src={"./brand.png"} />
        <div id="right-header">
          <a href="#" className="header-link">registry</a>
          <a href="#" className="header-link">usd: english</a>
          {/* <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div> */}
          <span id="dropdownTriangle" onMouseOut={this.mouseOutDropdown} onMouseOver={this.mouseOverDropdown}>
            {this.state.dropMoused ? <img src={'./Triangle.png'}></img> : <img src={'./DownTriangle.png'}></img>}
          </span>
          <a href="#" className="header-link">sign in / sign up </a>
          <span id="shoppingBag" onMouseOut={this.mouseOutBag} onMouseOver={this.mouseOverBag}>
            {this.state.bagMoused ? <img src={'./HoverBag.png'}></img> : <img src={'./Bag.png'}></img>}
          </span>
        </div>
      </div>
    )
  }
}
