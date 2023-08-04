import React from 'react';
import './ProductList.css';
import ProductListingSection from './component/ProductListingSection/ProductListingSection';

const ProductList = () => {
  return (
    <div className='page-container'>
      <ProductListingSection className='products-container' />
    </div>
  );
};

export default ProductList;
