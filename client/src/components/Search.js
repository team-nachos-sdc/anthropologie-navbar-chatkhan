import React, { Component } from 'react';
import axios from 'axios';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      moused: false,
      suggestions: []
    }
    this.mouseOut = this.mouseOut.bind(this);
    this.mouseOver = this.mouseOver.bind(this);

  }

  mouseOut() {
    this.setState({ moused: false });
  }

  mouseOver() {
    this.setState({ moused: true });
  }

  render() {
    return (
      <span className="search-container">
        <span>
          <form action="/action_page.php">
          <div class="search-wrapper">
              <span onMouseOut={this.mouseOut} onMouseOver={this.mouseOver}>
                {this.state.moused ? <img src={'./HoverSearch.png'}></img> : <img src={'./Search.png'}></img>}
              </span>
              <input type="text" placeholder="search" className="search"></input>
            </div>
          </form>
        </span>
      </span>
    )
  }
}