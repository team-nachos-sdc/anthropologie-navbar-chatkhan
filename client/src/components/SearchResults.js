import React, { Component } from 'react';
import axios from 'axios';

export default class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [], 
      results: []
    }
    this.getResults = this.getResults.bind(this);
  }

  getResults() {

  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div>Hello Modal</div>
    )
  }
}


