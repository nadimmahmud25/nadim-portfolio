import React from 'react';
import Navbar from '../../Shared/Navbar';
import Header from '../Header/Header';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <About/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;