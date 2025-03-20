import React from 'react';
import Banner from './Banner';
import Books from './Books';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet 
             title='Booi puke | Home'
            />
            <Banner />
            <Books />
        </div>
    );
};

export default Home;