// components/Home/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/styles';
import './Home.css';
import RentalCarPage from "../modal/modal";
import ButtonAppBar from "../AppBar/ButtonAppBar";
import Loader from "../Loader/Loader";


const Home = () => {
    return (
        <>
            <div className="home-container" style={styles.app}>
                <h1 className="home-title">Welcome to Car Rental Service</h1>
                <p className="home-description">
                    Explore our catalog of rental cars and find the perfect vehicle for your needs.
                </p>
                <Link to="/catalog" className="home-link">Go to Catalog</Link>
            </div>
        </>
    );
}

export default Home;
