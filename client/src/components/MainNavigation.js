import React from 'react';
// import NavCategories from './NavCategories.js';


const MainNavigation = (props) => {

  return (
    <div>
      <div className="navbar">
        <ul>
          <span className="dropdown">
            <li className="one"><a className="category" href="#">New!</a></li>
            <div className="dropdown-content">
              <div className="category-container">
                <div className="column column4" >
                  <p className="category-link">All Clothing</p>
                  <p className="category-link">Dresses</p>
                  <p className="category-link">Tops</p>
                  <p className="category-link">Pants</p>
                  <p className="category-link">Shoes & Accessories</p>
                </div>
                <div className="column column4" >
                  <p className="category-link">All Home & Furniture</p>
                  <p className="category-link">Furniture</p>
                  <p className="category-link">Bedding, Pillows, & Throws</p>
                  <p className="category-link">Kitchen & Dining</p>
                </div>
                <div className="column column4" >
                  <p className="category-link">Room Décor</p>
                  <p className="category-link">Plus</p>
                  <p className="category-link">Beauty & Wellness</p>
                  <p className="category-link">Kids & Babies</p>
                </div>
                <div className="column column4" >
                  <img className="nav-img" src={'./Sale.jpg'}></img>
                </div>
              </div>
            </div>
          </span>
          <span className="dropdown">
            <li className="two"><a className="category" href="#">Dresses</a></li>
          </span>
          <span className="dropdown">
            <li className="three"><a className="category" href="#">Clothing</a></li>
            <div className="dropdown-content">
              <div className="category-container">
                <div className="column column4" >
                  <p className="category-link">Shop All</p>
                  <p className="category-link">Limited Time: 30% off Fall Favorites</p>
                  <p className="category-link">New Arrivals</p>
                  <p className="category-link">Dresses</p>
                  <p className="category-link">Tops & Tees</p>
                  <p className="category-link">Sweaters</p>
                  <p className="category-link">Jackets & Coats</p>
                </div>
                <div className="column column4" >
                  <p className="category-link">Skirts</p>
                  <p className="category-link">Pants</p>
                  <p className="category-link">Jeans</p>
                  <p className="category-link">Jumpsuits</p>
                  <p className="category-link">Swimwear</p>
                  <p className="category-link">Kimonos</p>
                  <p className="category-link">Sleepwear & Intimates</p>
                </div>
                <div className="column column4" >
                  <p className="category-link">Loungewear</p>
                  <p className="category-link">Activewear</p>
                  <p className="category-link">Plus</p>
                  <p className="category-link">Petites</p>
                  <p className="category-link">Brands We Love</p>
                  <p className="category-link">Top-Rated</p>
                </div>
                <div className="column column4" >
                  <img className="nav-img" src={'./Sale.jpg'}></img>
                </div>
              </div>
            </div>
          </span>

          <span className="dropdown">
            <li className="four"><a className="category" href="#">Plus</a></li>
            <div className="dropdown-content">
              <div className="category-container">
                <div className="column column4" >
                  <p className="category-link">Shop All</p>
                  <p className="category-link">Limited Time: 30% off Fall Favorites</p>
                  <p className="category-link">New Arrivals</p>
                  <p className="category-link">Dresses</p>
                  <p className="category-link">Tops & Tees</p>
                  <p className="category-link">Sweaters</p>
                  <p className="category-link">Jackets & Coats</p>
                </div>
                <div className="column column4" >
                  <p className="category-link">Skirts</p>
                  <p className="category-link">Pants</p>
                  <p className="category-link">Jeans</p>
                  <p className="category-link">Jumpsuits</p>
                  <p className="category-link">Swimwear</p>
                  <p className="category-link">Kimonos</p>
                  <p className="category-link">Sleepwear & Intimates</p>
                </div>
                <div className="column column4" >
                  <p className="category-link">Loungewear</p>
                  <p className="category-link">Activewear</p>
                  <p className="category-link">Plus</p>
                  <p className="category-link">Petites</p>
                  <p className="category-link">Brands We Love</p>
                  <p className="category-link">Top-Rated</p>
                </div>
                <div className="column column4" >
                  <img className="nav-img" src={'./Plus.jpg'}></img>
                </div>
              </div>
            </div>
          </span>

          <li className="five"><a className="category" href="#">Shoes</a></li>
          <li className="six"><a className="category" href="#">Accessories</a></li>
          <li className="seven"><a className="category" href="#">Home & Furniture</a></li>
          <li className="eight"><a className="category" href="#">Beauty & Wellness</a></li>
          <li className="nine"><a className="category" href="#">30% Off Sale</a></li>
          <li className="ten"><a className="category" href="#">Gifts</a></li>
          <li className="eleven"><a className="category" href="#">BHLDN Weddings</a></li>
          <li className="twelve"><a className="category" href="#">Terrain</a></li>
          <hr />
        </ul>
      </div>
    </div>
  )
}

export default MainNavigation;