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
  let { suggestionOptions, results, query, searchClicked, trending } = props
  if (!searchClicked) {
    return null;
  }
  if (searchClicked && query.length === 0) {
    return (
      <div className="suggestions-box">
        <div className="trending">
          <h3 className="trend-h">Trending</h3>
          <span className="trend"><img className="tiny" src={'./TinySearch.png'}></img>kimono</span>
          <span className="trend"><img className="tiny" src={'./TinySearch.png'}></img>planner</span>
          <span className="trend"><img className="tiny" src={'./TinySearch.png'}></img>jumpsuit</span>
          <span className="trend"><img className="tiny" src={'./TinySearch.png'}></img>candle</span>
          <span className="trend"><img className="tiny" src={'./TinySearch.png'}></img>shower curtain</span>
        </div>
        <div className="popular-products">
          <h3 className="popular-h">Popular Products</h3>
          <div className="popular"><img className="result-img" src={popular[0].image1}></img>
            <div className="title"> {popular[0].title}</div></div>
          <div className="popular"><img className="result-img" src={popular[1].image1}></img>
            <div className="title"> {popular[1].title}</div></div>
          <div className="popular"><img className="result-img" src={popular[2].image1}></img>
            <div className="title"> {popular[2].title}</div></div>
        </div>
      </div>
    )
  }
  if (searchClicked && query.length > 0 && results.length > 0) {
    return (
      <div className="suggestions-box-searched">
        <div id="results-container">
          <p className="suggestion">{suggestionOptions[0]}</p>
          <p className="suggestion">{suggestionOptions[1]}</p>
          <p className="suggestion">{suggestionOptions[2]}</p>
          <p className="suggestion">{suggestionOptions[3]}</p>
          <p className="suggestion">{suggestionOptions[4]}</p>
          <div className="trending-searched">
            <h3 className="trend-h">Trending</h3>
            <span className="trend"><img className="tiny-searched" src={'./TinySearch.png'}></img>{trending[0]}</span>
            <span className="trend"><img className="tiny-searched" src={'./TinySearch.png'}></img>{trending[1]}</span>
            <span className="trend"><img className="tiny-searched" src={'./TinySearch.png'}></img>{trending[2]}</span>
            <span className="trend"><img className="tiny-searched" src={'./TinySearch.png'}></img>{trending[3]}</span>
            <span className="trend"><img className="tiny-searched" src={'./TinySearch.png'}></img>{trending[4]}</span>
          </div>
        </div>
        <div className="popular-products">
          <h3 className="popular-h">Product Results: {query}</h3>
          <div className="popular"><img className="result-img" src={results[0].image}></img>
            <div className="title"> {results[0].title}</div></div>
          <div className="popular"><img className="result-img" src={results[1].image}></img>
            <div className="title"> {results[1].title}</div></div>
          <div className="popular"><img className="result-img" src={results[2].image}></img>
            <div className="title"> {results[2].title}</div></div>
        </div>
      </div>
    )
  } else {
    return null;
  }
}

export default SearchResults;