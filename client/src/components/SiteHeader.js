import React, { Component } from 'react';
import Search from './Search.js';
import Login from './Login.js';

export default class SiteHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      bagMoused: false,
      dropMoused: false,
      loginClicked: false
    }
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleClickInside = this.handleClickInside.bind(this);
    this.handleXClick = this.handleXClick.bind(this);
    this.mouseOutDropdown = this.mouseOutDropdown.bind(this);
    this.mouseOverDropdown = this.mouseOverDropdown.bind(this);
    this.mouseOutBag = this.mouseOutBag.bind(this);
    this.mouseOverBag = this.mouseOverBag.bind(this);

  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ loginClicked: false });
    }
  }

  handleClickInside() {
    this.setState({ loginClicked: true });
  }

  handleXClick() {
    this.setState({ loginClicked: false })
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
          <img id="brand" src={"./images/brand.png"} />
          <span id="right-header">
            <a href="#" className="header-link">registry</a>
            <span className="dropdown-language">
              <a href="#" className="header-link" onMouseOut={this.mouseOutDropdown} onMouseOver={this.mouseOverDropdown}>usd: english</a>
              <span >
                {this.state.dropMoused ? <img className="dropdownTriangle" src={'./images/Triangle.png'}></img> : <img className="dropdownTriangle" src={'./images/DownTriangle.png'}></img>}
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
            <a href="#" className="header-link" onClick={this.handleClickInside} >sign in / sign up</a>
            <span onMouseOut={this.mouseOutBag} onMouseOver={this.mouseOverBag}>
              {this.state.bagMoused ? <img className="shoppingBag" src={'./images/HoverBag.png'}></img> : <img className="shoppingBag" src={'./images/Bag.png'}></img>}
            </span>
          </span>
        </div>
        <Login loginClicked={this.state.loginClicked} handleXClick={this.handleXClick} handleClickOutside={this.handleClickOutside} />
      </div>
    )
  }
}
