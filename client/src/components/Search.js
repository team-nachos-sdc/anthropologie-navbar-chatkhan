import React, { Component } from 'react';
import axios from 'axios';
import SearchResults from './SearchResults.js';

const suggestions = ["shirt", "shoes", "skirt", "set", "silk", "scarf", "skinny", "maxi skirt", "midi skirt", "skinny jeans", "shawl", "shoulder top", "shoulder", "printed skirt", "pencil skirt", "womens", "wall", "wall art", "watch", "wool", "white shirt", "white blouse", "shirt white", "blouse white", "white duvet"];
const trends = ["shirt dress", "denim shirt", "shirt", "graphic t-shirt", "white shirt", "denim skirt", "midi skirt", "pencil skirt", "maxi skirt", "skirt", "white dress", "white blouse", "white shirt", "white jeans", "white t-shirt"];

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      moused: false,
      searchClicked: false,
      results: [],
      suggestionOptions: [],
      trending: []
    }
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleClickInside = this.handleClickInside.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.suggestionChange = this.suggestionChange.bind(this);
    this.getTrending = this.getTrending.bind(this);
    this.getResults = this.getResults.bind(this);
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
    this.setState({ query: event.target.value }, () => this.suggestionChange());
  }

  suggestionChange() {
    let arr = [];
    for (var i = 0; i < suggestions.length; i++) {
      if (!suggestions[i].includes(' ')) {
        if (suggestions[i].slice(0, this.state.query.length) === this.state.query) {
          arr.push(suggestions[i])
        }
      } else {
        if (suggestions[i].includes(this.state.query)) {
          arr.push(suggestions[i])
        }
      }
    }
    arr = arr.slice(0, 5)
    this.setState({ suggestionOptions: arr }, () => this.getTrending())
  }

  getTrending() {
    let arr = [];
    for (var i = 0; i < trends.length; i++) {
      if (trends[i].includes(this.state.query)) {
        arr.push(trends[i])
      }
    }
    arr = arr.slice(0, 5)
    this.setState({ trending: arr }, () => this.getResults())
  }

  getResults() {
    axios.get('/search')
      .then(response => {
        // console.log("response", response)
        let arr = [];
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].title.includes(this.state.query) || response.data[i].color.includes(this.state.query)) {
            arr.push(response.data[i])
          }
        }
        arr = arr.slice(0, 3)
        this.setState({ results: arr }, () => console.log(this.state))
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <span className="search-container" >
        <span>
          <form action="/action_page.php" >
            <div className="search-wrapper">
              <span onMouseOut={this.mouseOut} onMouseOver={this.mouseOver}>
                {this.state.moused ? <img src={'./HoverSearch.png'}></img> : <img src={'./Search.png'}></img>}
              </span>
              <input tabIndex="1" ref={this.setWrapperRef} onKeyUp={this.handleChange} onClick={this.handleClickInside} type="text" placeholder="search" className="search" ></input>
            </div>
          </form>
          <SearchResults searchClicked={this.state.searchClicked} query={this.state.query} results={this.state.results} suggestionOptions={this.state.suggestionOptions} trending={this.state.trending} />
        </span>
      </span>
    )
  }
}