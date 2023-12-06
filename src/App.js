import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SharedLayout from "./components/SharedLayout/SharedLayout";
import store from "./redux/store";
import {advertsApi} from "./redux/api";
import './App.css'

const Catalog = React.lazy(() => import('./pages/Catalog/Catalog'));
const Favorites = React.lazy(() => import('./pages/Favorites/Favorites'));
const Home = React.lazy(() => import('./pages/Home/Home'));

function App() {
    store.dispatch(advertsApi.util.resetApiState());
    return (
        <BrowserRouter basename={'/rent-car'}>
            <Routes>
                <Route path="/" element={<SharedLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/catalog" element={<Catalog/>}/>
                    <Route path="/favorites" element={<Favorites/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
