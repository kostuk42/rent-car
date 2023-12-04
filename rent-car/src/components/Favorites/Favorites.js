// components/Favorites/Favorites.js
import React from 'react';
import { useSelector } from 'react-redux';
import AdvertCard from '../AdvertCard/AdvertCard';
import './Favorites.css';

const Favorites = () => {
    const favoriteAdverts = useSelector(state => state.favorites);

    return (
        <div className="catalog">
            {favoriteAdverts && favoriteAdverts.map((advert, i) => (
                <AdvertCard key={i} advert={advert}/>))}
            {!favoriteAdverts?.length && <p className="no-favorites-message">No favorite adverts yet.</p>}

        </div>
    );
}

export default Favorites;
