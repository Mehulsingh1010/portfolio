import React from 'react';

import { About, Footer, Header, Skills, Work } from './container';
import Navbar from './components/Navbar/Navbar';
import './App.scss';

const App = () => (
  <div className="app">
    {/* <h1>hello</h1> */}
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    {/* <Testimonial /> */}
    <Footer /> 
  </div>
);

export default App;
