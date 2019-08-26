import React from 'react';

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
const SearchResults = (props) => {
  let { suggestionOptions, results, query, searchClicked } = props
  if (!searchClicked) {
    return null;
  }
  if (searchClicked && query.length === 0) {
    return (
      <div className="suggestions-box">
        <div className="trending">
          <h3 className="trend-h">Trending</h3>
          {/* <ul> */}

          <span className="trend"><img className="tiny" src={'./TinySearch.png'}></img>kimono</span>
          <span className="trend"><img className="tiny" src={'./TinySearch.png'}></img>kimono</span>
          <span className="trend"><img className="tiny" src={'./TinySearch.png'}></img>kimono</span>
          <span className="trend"><img className="tiny" src={'./TinySearch.png'}></img>kimono</span>
          <span className="trend"><img className="tiny" src={'./TinySearch.png'}></img>kimono</span>

          {/* </ul> */}
        </div>
        <div className="popular-products">
          <h3 className="popular-h">Popular Products</h3>
          <img src={popular[0].image1}></img>
          <img src={popular[1].image1}></img>
          <img src={popular[2].image1}></img>
          <span> {popular[0].title}</span>
          <span>{popular[1].title}</span>
          <span>{popular[2].title}</span>

        </div>

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

export default SearchResults;