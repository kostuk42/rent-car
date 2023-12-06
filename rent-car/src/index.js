
import React from 'react';
import App from './App';
import {Provider} from 'react-redux';
import store, {persistor} from './redux/store';

import {createRoot} from "react-dom/client";
import {PersistGate} from "redux-persist/integration/react";
import Loader from "./components/Loader/Loader";

const root = createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <PersistGate loading={<Loader/>} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>
);


