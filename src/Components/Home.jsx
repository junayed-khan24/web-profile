import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';

const Home = () => {
    return (
        <div className=''>
             <header className='mt-0'>
                <Navbar></Navbar>
                <div className='mt-6 '>
                   <Hero></Hero>
                </div>
             </header>

              <About></About>
           


        </div>
    );
};

export default Home;