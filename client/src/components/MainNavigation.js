import React from 'react';

const MainNavigation = (props) => {

  return (
    <div>
      <div className="navbar">
        <ul>
          <li className="one">
            <span className="dropdown">
              <a className="category" href="#">New!</a>
              <div className="dropdown-content">
                <div className="category-container">
                  <div className="column" >
                    <p className="category-link">All Clothing</p>
                    <p className="category-link">Dresses</p>
                    <p className="category-link">Tops</p>
                    <p className="category-link">Pants</p>
                    <p className="category-link">Shoes & Accessories</p>
                  </div>
                  <div className="column" >
                    <p className="category-link">All Home & Furniture</p>
                    <p className="category-link">Furniture</p>
                    <p className="category-link">Bedding, Pillows, & Throws</p>
                    <p className="category-link">Kitchen & Dining</p>
                  </div>
                  <div className="column" >
                    <p className="category-link">Room Décor</p>
                    <p className="category-link">Plus</p>
                    <p className="category-link">Beauty & Wellness</p>
                    <p className="category-link">Kids & Babies</p>
                  </div>
                  <div className="column" >
                    <img className="nav-img" src={'./images/Sale.jpg'}></img>
                  </div>
                </div>
              </div>
            </span>
          </li>

          <li className="two"><a className="category" href="#">Dresses</a></li>

          <li className="three">
            <span className="dropdown">
              <a className="category" href="#">Clothing</a>
              <div className="dropdown-content">
                <div className="category-container">
                  <div className="column" >
                    <p className="category-link">Shop All</p>
                    <p className="category-link">Limited Time: 30% off Fall Favorites</p>
                    <p className="category-link">New Arrivals</p>
                    <p className="category-link">Dresses</p>
                    <p className="category-link">Tops & Tees</p>
                    <p className="category-link">Sweaters</p>
                    <p className="category-link">Jackets & Coats</p>
                  </div>
                  <div className="column" >
                    <p className="category-link">Skirts</p>
                    <p className="category-link">Pants</p>
                    <p className="category-link">Jeans</p>
                    <p className="category-link">Jumpsuits</p>
                    <p className="category-link">Swimwear</p>
                    <p className="category-link">Kimonos</p>
                    <p className="category-link">Sleepwear & Intimates</p>
                  </div>
                  <div className="column" >
                    <p className="category-link">Loungewear</p>
                    <p className="category-link">Activewear</p>
                    <p className="category-link">Plus</p>
                    <p className="category-link">Petites</p>
                    <p className="category-link">Brands We Love</p>
                    <p className="category-link">Top-Rated</p>
                  </div>
                  <div className="column" >
                    <img className="nav-img" src={'./images/Sale.jpg'}></img>
                  </div>
                </div>
              </div>
            </span>
          </li>
          <li className="four">
            <span className="dropdown">
              <a className="category" href="#">Plus</a>
              <div className="dropdown-content">
                <div className="category-container">
                  <div className="column" >
                    <p className="category-link">Shop All</p>
                    <p className="category-link">Limited Time: 30% off Fall Favorites</p>
                    <p className="category-link">New Arrivals</p>
                    <p className="category-link">Plus Dresses</p>
                    <p className="category-link">Plus Tops</p>
                  </div>
                  <div className="column" >
                    <p className="category-link">Plus Sweaters</p>
                    <p className="category-link">Plus Jackets & Coats</p>
                    <p className="category-link">Plus Jeans</p>
                    <p className="category-link">Plus Pants</p>
                    <p className="category-link">Plus Skirts</p>
                  </div>
                  <div className="column" >
                    <p className="category-link">Plus Activewear</p>
                    <p className="category-link">Wide Width Shoes</p>
                    <p className="category-link">Plus Belts</p>
                    <p className="category-link">Plus Shapewear</p>
                    <p className="category-link">Plus Swimwear</p>
                  </div>
                  <div className="column" >
                    <img className="nav-img" src={'./images/Plus.jpg'}></img>
                  </div>
                </div>
              </div>
            </span>
          </li>
          <li className="five">
            <span className="dropdown">
              <a className="category" href="#">Shoes</a>
              <div className="dropdown-content">
                <div className="category-container3">
                  <div className="column column3" >
                    <p className="category-link">Shop All</p>
                    <p className="category-link">New Arrivals</p>
                    <p className="category-link">Boots & Booties</p>
                    <p className="category-link">Sneakers</p>
                  </div>
                  <div className="column column3" >
                    <p className="category-link">Flats</p>
                    <p className="category-link">Heels</p>
                    <p className="category-link">Slides & Mules</p>
                    <p className="category-link">Sandals</p>
                  </div>
                  <div className="column column3" >
                    <p className="category-link">Formal Occasion Shoes</p>
                    <p className="category-link">Rain & Weather Boots</p>
                    <p className="category-link">Socks & Legwear</p>
                  </div>
                </div>
              </div>
            </span>
          </li>
          <li className="six">
            <span className="dropdown">
              <a className="category" href="#">Accessories</a>
              <div className="dropdown-content">
                <div className="category-container3">
                  <div className="column column3" >
                    <p className="category-link">Shop All</p>
                    <p className="category-link">New Arrivals</p>
                    <p className="category-link">Bags & Small Accessories </p>
                    <p className="category-link">Jewelry</p>
                  </div>
                  <div className="column column3" >
                    <p className="category-link">Hair Accessories</p>
                    <p className="category-link">Hats</p>
                    <p className="category-link">Sunglasses & Reading Glasses</p>
                    <p className="category-link">Belts</p>
                  </div>
                  <div className="column column3" >
                    <p className="category-link">Kimonos & Scarves</p>
                    <p className="category-link">Travel & Tech</p>
                    <p className="category-link">Mix & Match 3 for $30 Bracelets</p>
                    <p className="category-link">Top-Rated</p>
                  </div>
                  {/* <div className="column category-border" >
                  <p className="category-link inspired">Get Inspired</p>
                  <p className="category-link">The August Collection: Shoes</p>
                  <p className="category-link">The August Collection: Accessories</p>
                  <p className="category-link">The Animal-Inspired Shop</p>
                </div> */}
                </div>
              </div>
            </span>
          </li>
          <li className="seven">
            <span className="dropdown">
              <a className="category" href="#">Home & Furniture</a>
              <div className="dropdown-content">
                <div className="category-container">
                  <div className="column" >
                    <p className="category-link">New Arrivals</p>
                    <p className="category-link">Furniture</p>
                    <p className="category-link">Bedding, Pillows & Throws</p>
                    <p className="category-link">Kitche & Dining</p>
                    <p className="category-link">Wall Art & Mirrors</p>
                    <p className="category-link">Rugs & Curtains</p>
                  </div>
                  <div className="column" >
                    <p className="category-link">Room Decor</p>
                    <p className="category-link">Lighting</p>
                    <p className="category-link">Candles</p>
                    <p className="category-link">Hardware</p>
                    <p className="category-link">Wallpaper</p>
                    <p className="category-link">Kids & Babies</p>
                  </div>
                  <div className="column" >
                    <p className="category-link">Bathroom</p>
                    <p className="category-link">Stationary, Tech & Travel</p>
                    <p className="category-link">Organizing & Travel</p>
                    <p className="category-link">Sale Home & Furniture</p>
                    <p className="category-link">Top-Rated</p>
                  </div>
                  <div className="column" >
                    <img className="nav-img" src={'./images/Home.jpg'}></img>
                  </div>
                </div>
              </div>
            </span>
          </li>
          <li className="eight">
            <span className="dropdown">
              <a className="category" href="#">Beauty & Wellness</a>
              <div className="dropdown-content">
                <div className="category-container3">
                  <div className="column column3" >
                    <p className="category-link">New Arrivals</p>
                    <p className="category-link">Shop All</p>
                    <p className="category-link">Bath and Body</p>
                    <p className="category-link">Skin Care</p>
                    <p className="category-link">Makeup</p>
                  </div>
                  <div className="column column3" >
                    <p className="category-link">Hair Care</p>
                    <p className="category-link">Perfume</p>
                    <p className="category-link">Mini Size</p>
                    <p className="category-link">Bath Bar</p>
                    <p className="category-link">The Wellness Shop</p>
                  </div>
                  <div className="column column3" >
                    <p className="category-link">Beauty Sets & Kits</p>
                    <p className="category-link">The Mask Shop</p>
                    <p className="category-link">Tools & Brushes</p>
                    <p className="category-link">Top-Rated</p>
                  </div>
                  {/* <div className="column category-border" >
                  <p className="category-link inspired">Get Inspired</p>
                  <p className="category-link">The Summer Beauty Edit</p>
                  <p className="category-link">CBD 101</p>
                  <p className="category-link">My Crystal Face Roller Made Me a Morning Person</p>
                </div> */}
                </div>
              </div>
            </span>
          </li>
          <li className="nine">
            <span className="dropdown">
              <a className="category" href="#">30% Off Sale</a>
              <div className="dropdown-content">
                <div className="category-container">
                  <div className="column" >
                    <p className="category-link">All Sale</p>
                    <p className="category-link">Limited Time: 30% Off Fall Favorites</p>
                    <p className="category-link">Freshly Cut</p>
                  </div>
                  <div className="column" >
                    <p className="category-link">Clothing</p>
                    <p className="category-link">Shoes & Accessories</p>
                    <p className="category-link">Home & Furniture</p>
                  </div>
                  <div className="column" >
                    <p className="category-link">Beauty & Wellness</p>
                    <p className="category-link">Plus</p>
                    <p className="category-link">Petites</p>
                  </div>
                  <div className="column" >
                    <img className="nav-img" src={'./images/Sale.jpg'}></img>
                  </div>
                </div>
              </div>
            </span>
          </li>
          <li className="ten">
            <span className="dropdown">
              <a className="category" href="#">Gifts</a>
              <div className="dropdown-content">
                <div className="category-container3">
                  <div className="column column3" >
                    <p className="category-link">Shop All Gifts</p>
                    <p className="category-link">Gifts By Occasion</p>
                    <p className="category-link">Gifts by Recipient</p>
                  </div>
                  <div className="column column3" >
                    <p className="category-link">Gifts by Price</p>
                    <p className="category-link">Curated Gift Shops</p>
                    <p className="category-link">Registry</p>
                  </div>
                  <div className="column column3" >
                    <p className="category-link">Top-Rated Gifts</p>
                    <p className="category-link">Gift Cards & E-Gift Cards</p>
                  </div>
                  {/* <div className="column category-border" >
                  <p className="category-link inspired">Now Presenting</p>
                  <p className="category-link">Home Gifts</p>
                  <p className="category-link">Beauty Gifts</p>
                  <p className="category-link">Accessories Gifts</p>
                  <p className="category-link">Clothing Gifts</p>
                  <p className="category-link">Gifts for Pets</p>
                </div> */}
                </div>
              </div>
            </span>
          </li>

          <li className="eleven"><a className="category" href="#">BHLDN Weddings</a></li>

          <li className="twelve"><a className="category" href="#">Terrain</a></li>

          <hr />
        </ul>
      </div>
      <div className="bottom-border">
    </div >
    </div >
  )
}

export default MainNavigation;