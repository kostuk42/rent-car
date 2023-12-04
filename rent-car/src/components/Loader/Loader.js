import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import './Loader.css';

const Loader = () => {
    return (
        <div className="loader">
            <ThreeDots className="Loader" type="Oval" color="#3F51B5" height={80} width={80} />
        </div>
    );
}

export default Loader;
