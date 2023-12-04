import React, {Suspense} from 'react';
import ButtonAppBar from "../AppBar/ButtonAppBar";
import {Outlet, useNavigate} from "react-router-dom";
import Loader from "../Loader/Loader";

const SharedLayout = () => {
    const navigate = useNavigate();
    const navigateCatalog = () => {
        navigate('/catalog');
    }
    const navigateFavorites = () => {
        navigate('/favorites');
    }
    const navigateHome = () => {
        navigate('/');
    }
    return (
        <div>
            <ButtonAppBar navigateCatalog={navigateCatalog}
                          navigateHome={navigateHome}
                          navigateFavorites={navigateFavorites}/>
            <Suspense fallback={<Loader/>}>
                <Outlet/>
            </Suspense>
        </div>


    );
};

export default SharedLayout;
