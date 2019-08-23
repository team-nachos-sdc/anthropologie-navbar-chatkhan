import React from 'react';
import NavCategories from './NavCategories.js';


const MainNavigation = (props) => {
  return (
    <div className="main-container"> 
  <ul>
  <li className="new"><a href="#">New!</a></li>
<li className="dresses"><a href="#">Dresses</a></li>
<li className="clothing"><a href="#">Clothing</a></li>
<li className="plus"><a href="#">Plus</a></li>    
<li className="new"><a href="#">Shoes</a></li>
<li className="dresses"><a href="#">Accessories</a></li>
<li className="clothing"><a href="#">Home & Furniture</a></li>
<li className="plus"><a href="#">Beauty & Wellness</a></li>    
<li className="new"><a href="#">30% Off Sale</a></li>
<li className="dresses"><a href="#">Gifts</a></li>
<li className="clothing"><a href="#">BHLDN Weddings</a></li>
<li className="plus"><a href="#">Terrain</a></li>
    <hr />
  </ul>
</div>
  )
}

export default MainNavigation;