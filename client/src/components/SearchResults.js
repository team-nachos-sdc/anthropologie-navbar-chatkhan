import React, { Component } from 'react';
import axios from 'axios';

const popular = [
{
  title: 'Slouched Trousers',
  image1: 'https://s7d5.scene7.com/is/image/Anthropologie/4123382010008_001_b?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain'
}, 
{
  title: 'Pilcro Patchwork Slim Boyfriend Jeans',
  image1: 'https://s7d5.scene7.com/is/image/Anthropologie/4122382010047_092_b?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain'
}, 
{
  title: 'Makura Faux Fur Pillow',
  image1: 'https://s7d5.scene7.com/is/image/Anthropologie/45455790AA_011_b10?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain',
  image2: 'https://s7d5.scene7.com/is/image/Anthropologie/45455790AA_011_b?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain'
}
]
export default class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

render() {

  let { suggestionOptions, results, query, searchClicked } = this.props
  if (!searchClicked) {
    return null;
  }
  if (searchClicked && query.length === 0) {
    return (
      <div>
        hello
        
        </div>
    )
  }
  if (searchClicked && query.length > 0) {
    return (
      <div>
hella
      </div>
    )
  }
}
}


