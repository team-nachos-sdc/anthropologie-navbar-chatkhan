import React from 'react';

const NavCategories = (props) => {
  if (props.one === true) {
    return (
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
    )
  } else {
    return null;
  }
}

export default NavCategories;