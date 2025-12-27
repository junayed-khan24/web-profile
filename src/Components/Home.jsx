import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
import PortfolioSection from '../Components/PortfolioSection'
import Services from './Services';
import Contact from './Contact';
import Blogs from './Blogs/Blogs';

const Home = () => {
    return (
        <div>
                
                <Hero></Hero>
            <Services></Services>
            <PortfolioSection></PortfolioSection>
            <Blogs></Blogs>
            <Contact></Contact>
        </div>
    );
};

export default Home;