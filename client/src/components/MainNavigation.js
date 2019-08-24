import React from 'react';
// import NavCategories from './NavCategories.js';


const MainNavigation = (props) => {

  return (

    <div>
      <div className="nav">
        <ul>
          <span className="dropdown-one">
            <li className="one"><a className="category" href="#">New!</a></li>
            <div className="super-content">
            <div className="dropdown-content-one">
              <div className="column" >
                <a href="#" className="category-link">All Clothing</a>
                <a href="#" className="category-link">Dresses</a>
                <a href="#" className="category-link">Tops</a>
                <a href="#" className="category-link">Pants</a>
                <a href="#" className="category-link">Shoes & Accessories</a>
              </div>
              <div href="#" className="column" >
                <a href="#" className="category-link">All Home & Furniture</a>
                <a href="#" className="category-link">Furniture</a>
                <a href="#" className="category-link">Bedding, Pillows, & Throws</a>
                <a href="#" className="category-link">Kitchen & Dining</a>
              </div>
              <div href="#" className="column" >
                <a href="#" className="category-link">Room Décor</a>
                <a href="#" className="category-link">Plus</a>
                <a href="#" className="category-link">Beauty & Wellness</a>
                <a href="#" className="category-link">Kids & Babies</a>
              </div>
              <div className="column" >
                <img className="nav-img" src={'./Sale.jpg'}></img>
              </div>
              </div>
            </div>
          </span>

          <span className="dropdown-two">
            <li className="two"><a className="category" href="#">Dresses</a></li>
          </span>

          <span className="dropdown-three">
            <li className="three"><a className="category" href="#">Clothing</a></li>

          </span>

          <span className="dropdown-four">
          <li className="four"><a className="category" href="#">Plus</a></li>
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