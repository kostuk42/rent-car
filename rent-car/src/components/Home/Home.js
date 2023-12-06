
import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="hero">
            <div className="overlay"> </div>
            <div className="home-container">
                <h1 className="home-title">Welcome to Car Rental Service</h1>
                <p className="home-description">
                    Explore our catalog of rental cars and find the perfect vehicle for your needs.
                </p>
                <Link to="/catalog" className="home-link">Go to Catalog</Link>
            </div>
        </div>

    );
}

export default Home;
