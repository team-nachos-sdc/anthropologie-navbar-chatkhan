import React, { Component } from 'react';
import axios from 'axios';
import SearchResults from './SearchResults.js';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      moused: false,
      searchClicked: false
    }
    this.mouseOut = this.mouseOut.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleClickInside = this.handleClickInside.bind(this);
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
      this.setState({ searchClicked: false });
    }
  }

  handleClickInside() {
    this.setState({ searchClicked: true });
  }

  mouseOut() {
    this.setState({ moused: false });
  }

  mouseOver() {
    this.setState({ moused: true });
  }

  handleChange(event) {
    this.setState({ query: event.target.value }, () => console.log(this.state));
  }

  render() {
    return (
      <span className="search-container" >
        <span>
          <form action="/action_page.php" onKeyPress={this.getResults}>
            <div className="search-wrapper">
              <span onMouseOut={this.mouseOut} onMouseOver={this.mouseOver}>
                {this.state.moused ? <img src={'./HoverSearch.png'}></img> : <img src={'./Search.png'}></img>}
              </span>
              <input ref={this.setWrapperRef} onChange={this.handleChange} onClick={this.handleClickInside} type="text" placeholder="search" className="search" ></input>
            </div>
          </form>
          <SearchResults searchClicked={this.state.searchClicked} query={this.state.query} />
        </span>
      </span>
    )
  }
}