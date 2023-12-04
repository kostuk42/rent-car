// components/AdvertCard/AdvertCard.js
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToFavorites, removeFromFavorites} from '../../redux/favoritesSlice';
import './AdvertCard.css';
import {Button} from "@mui/material";
import AdvertDetailsModal from "../AdvertDetailsModal/AdvertDetailsModal";
import {BlueSpan, CardHolder, Image, Info, MainButton, Wrapper} from "./AdvertCard.styled";
import {Item, List} from "../AdvertDetailsModal/AdvertDetailsModal.styled";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import noImage from '../../assets/images/no_image.jpg';

export const onImageError = (e) => {
    e.target.src = noImage;
}

const AdvertCard = ({advert}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const dispatch = useDispatch();
    const isFavorite = useSelector(state => state.favorites.some(ad => ad === advert));
    const handleToggleFavorite = () => {
        if (isFavorite) {
            dispatch(removeFromFavorites(advert));
        } else {
            dispatch(addToFavorites(advert));
        }
    };

    return (
            <Wrapper>
                <div>
                    {
                        isFavorite ? <FavoriteIcon  sx={{
                            position: 'absolute',
                            top: 12,
                            right: 12,
                            color: '#3470FF',
                            pointerEvents: 'none'
                        }}/> : <FavoriteBorderIcon  sx={{
                            position: 'absolute',
                            top: 12,
                            right: 12,
                            color: '#FFFFFF',
                            pointerEvents: 'none'
                        }}/>
                    }
                    <Image src={advert.img || advert.photoLink}
                           alt={advert.make}
                           onClick={handleToggleFavorite}
                           onError={onImageError}/>
                    <Info>
                        <div>
                            <span>{advert.make} </span>
                            <BlueSpan>{advert.model}, </BlueSpan>
                            <span>{advert.year}</span>
                        </div>
                        <span>{advert.rentalPrice}</span>
                    </Info>
                    <List>
                        <Item>{advert.address.split(',')[1]}</Item>
                        <Item>{advert.address.split(',')[2]}</Item>
                        <Item>{advert.rentalCompany}</Item>
                        <Item>{advert.type}</Item>
                        <Item>{advert.model}</Item>
                        <Item>{advert.mileage}</Item>
                        <Item>{advert.accessories[0]}</Item>
                    </List>
                    <AdvertDetailsModal open={open} setOpen={setOpen} data={advert}/>
                </div>
                <MainButton onClick={handleOpen}>
                    Learn More
                </MainButton>
            </Wrapper>
    );
}

export default AdvertCard;
