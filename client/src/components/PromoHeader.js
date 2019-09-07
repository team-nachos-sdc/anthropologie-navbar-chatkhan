import React from 'react';

const PromoHeader = (props) => {
  return (
    <div className="promo-container">
      <div className="promo-banner">
        <span className="promo-pre-title" > limited time </span>
        <span className="promo-title" > EXTRA 30% OFF SALE ITEMS </span>
        <span>
          <div className="promo-links">
            <a className="promo-link">shop sale clothing</a>
            <a className="promo-link">shop sale home</a>
            <a className="promo-link">details</a>
          </div>
        </span>
      </div>
    </div>
  )
}

export default PromoHeader;