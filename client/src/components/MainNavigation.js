import React from 'react';
// import NavCategories from './NavCategories.js';


const MainNavigation = (props) => {

  return (

    <div>
      <div className="nav">
        <ul>
          <span className="dropdown-one">
            <li className="one"><a className="category" href="#">New!</a></li>
            <div className="dropdown-content-one">
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
                <img className="nav-img" src={'./Sale.jpg'}></img>
              </div>
            </div>
          </span>


          <li className="two"><a className="category" href="#">Dresses</a></li>



          <li className="three"><a className="category" href="#">Clothing</a></li>



          <li className="four"><a className="category" href="#">Plus</a></li>



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