import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Footer from './Footer';
import PortfolioSection from './PortfolioSection';

const Home = () => {
    return (
        <div className=''>
             <header className=''>
                <Navbar></Navbar>
                <div className=' '>
                   <Hero></Hero>
                </div>
             </header>

              <About></About>
              <PortfolioSection></PortfolioSection>
              <Footer></Footer>
        </div>
    );
};

export default Home;