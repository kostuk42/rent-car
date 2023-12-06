import React from 'react';
import {useSelector} from 'react-redux';
import AdvertCard from '../../components/AdvertCard/AdvertCard';

const Favorites = () => {
    const favoriteAdverts = useSelector(state => state.favorites);

    return (
        <div className="catalog">
            {favoriteAdverts && favoriteAdverts.map((advert, i) => (
                <AdvertCard key={i} advert={advert}/>))}
            {!favoriteAdverts?.length && <p style={{paddingTop: '29px'}}>No favorite adverts yet.</p>}
        </div>
    );
}

export default Favorites;
