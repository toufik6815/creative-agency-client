import React from 'react';
import Header from '../Header/Header';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Services from "../Services/Services";
import Works from '../Works/Works';
import Reviews from '../Reviews/Reviews';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BusinessInfo></BusinessInfo>
            <Services></Services>
            <Works></Works>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;