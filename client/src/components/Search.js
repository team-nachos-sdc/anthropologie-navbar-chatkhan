import React, { Component } from 'react';
import axios from 'axios';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }


  render() {
    return (
      <div className="search-container">
        <form action="/action_page.php">
          <input type="text" placeholder="search" className="search"></input>
        </form>

      </div>
    )
  }
}