import React from 'react';
import Navbar from '../../Shared/Navbar';
import Header from '../Header/Header';
import About from '../About/About';
import Projects from '../../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Skrill from '../Skrill/Skrill';
const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <About/>
            <Skrill/>
            <Projects/>
           
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;