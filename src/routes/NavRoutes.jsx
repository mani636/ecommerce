import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Cart,
  Home,
  Login,
  ProductList,
  SingleProduct,
  Wishlist,
} from '../Pages';

const NavRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<Login />} />
      <Route path='/productlist' element={<ProductList />} />
      <Route path='/singleproduct/:id' element={<SingleProduct />} />
      <Route path='/wishlist' element={<Wishlist />} />
    </Routes>
  );
};

export default NavRoutes;
