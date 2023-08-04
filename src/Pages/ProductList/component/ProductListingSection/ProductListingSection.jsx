import React from 'react';
import Tilt from 'react-parallax-tilt';
import './ProductListingSection.css';
import { Link } from 'react-router-dom';
import productData from '../../../../context/productdata';
import { BsFillStarFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';

const ProductListingSection = () => {
  return (
    <div className='product-card-container"'>
      {productData.map((product) => {
        const {
          id,
          name,
          img,
          rating,
          review,
          original_price,
          discounted_price,
          category_name,
          is_stock,
          trending,
        } = product;

        return (
          <Tilt
            key={id}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareEnable={false}
            transitionSpeed={2000}
            scale={1.02}
          >
            <div className='product-card' key={id}>
              <Link>
                <div className='product-card-image'>
                  <tilt
                    transitionSpeed={2000}
                    tiltMaxAngleX={15}
                    tiltMaxAngleY={15}
                    scale={1.18}
                  >
                    <img src={img} />
                  </tilt>
                </div>
              </Link>

              <div className='product-card-details'>
                <h3>{name}</h3>
                <p className='rating'>
                  {rating}
                  <BsFillStarFill color='orange' /> ({review} reviews){' '}
                </p>
                <div className='price-container'>
                  <p className='original-price'>{original_price}</p>
                  <p className='discount-price'>{discounted_price}</p>
                </div>

                <p>Gender: {category_name}</p>
                <div className='info'>
                  <p className='out-of-stock'>{is_stock}</p>
                  <p className='trending'>{trending}</p>
                </div>
              </div>

              <div className='product-card-buttons'>
                <button className='cart-btn' type='button'>
                  Add To Cart
                </button>
                <button className='wishlist' type='button'>
                  <AiOutlineHeart size={30} />
                </button>
              </div>
            </div>
          </Tilt>
        );
      })}
    </div>
  );
};

export default ProductListingSection;
