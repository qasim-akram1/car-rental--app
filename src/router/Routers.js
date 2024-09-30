import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Use curly braces for named imports
import Home from '../pages/Home';
import About from '../pages/About';
import CarListing from '../pages/CarListing';
import CarDetails from '../pages/CarDetails';
import Blog from '../pages/Blog';
import BlogDetail from '../pages/BlogDetail';
import NotFound from '../pages/NotFound';
import Contact from '../pages/Contact';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/cars' element={<CarListing />} />
      <Route path='/cars/:slug' element={<CarDetails />} />
      <Route path='/blogs' element={<Blog />} />
      <Route path='/blogs/:slug' element={<BlogDetail />} />
      <Route path='/contact' element={<Contact />} /> {/* Added route for Contact */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
