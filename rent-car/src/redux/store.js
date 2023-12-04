// redux/store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import filtersReducer from './filtersSlice';
import favoritesReducer from './favoritesSlice';
import paginationReducer from './paginationSlice';
import {advertsApi} from "./api";
import { setupListeners } from '@reduxjs/toolkit/query';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'rent-car',
    version: 1,
    storage
};

const rootReducer = combineReducers({
    filters: filtersReducer,
    favorites: favoritesReducer,
    pagination: paginationReducer,
    [advertsApi.reducerPath]: advertsApi.reducer
});

const persistingReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistingReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(advertsApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export default store;
