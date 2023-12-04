// App.js
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import Home from './components/Home/Home';
// import Catalog from './components/Catalog/Catalog';
// import Favorites from './components/Favorites/Favorites';
import RentalCarPage from "./components/modal/modal";
import SharedLayout from "./components/SharedLayout/SharedLayout";

const Catalog = React.lazy(() => import('./components/Catalog/Catalog'));
const Favorites = React.lazy(() => import('./components/Favorites/Favorites'));
const Home = React.lazy(() => import('./components/Home/Home'));

function App() {
    return (
        <BrowserRouter>
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
