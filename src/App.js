import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import './App.css';
import './index.css';


import { Routes, Route } from 'react-router-dom';

import {Navbar,Strap,Footer} from './Component';
import {Home, About, Contact, Service } from './Pages';

const App = () => {
  return (
    <>
    <div className='app'>
      <div className='gradient__bg'>
      <Strap/>
      <Routes>
      <Route path="/" element={<Navbar />}>
       <Route index element={<Home />} />
       <Route path="About" element={<About />} />
       <Route path="Service" element={<Service />} />
       <Route path="Contact"  element={<Contact />} />
       <Route path="*"/>
       
      </Route>
    </Routes>
    <Footer/>
      </div>
    </div>
    
    {/* 
        */}
    </>
  );
}

export default App;
