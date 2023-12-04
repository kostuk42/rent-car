// components/Catalog/Catalog.js
import React, {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AdvertCard from '../AdvertCard/AdvertCard';
import FilterDropdown, {toNumber} from '../FilterDropdown/FilterDropdown';
import {setCurrentPage} from '../../redux/paginationSlice';
import {useGetAdvertsByPageQuery, useGetAllAdvertsQuery} from "../../redux/api";
import './Catalog.css';
import {nanoid} from "nanoid";
import {getPrices} from "../../services/utils";

export const isFiltering = (filters) => {
    if (!filters) return false;
    console.log("filters!!!", filters)
    console.log((filters.mileage))
    // console.log("Object.values(filters).some(value => value)")
    // console.log(Object.values(filters).some(value => value))
    return filters.make || filters.price || Object.values(filters.mileage).some(value => {
        if (value === Infinity || value === -Infinity) return false
        return value
    });
}


const Catalog = () => {
    const dispatch = useDispatch();
    const [allCars, setAllCars] = useState([]);
    const currentPage = useSelector(state => state.pagination.currentPage);
    const filters = useSelector(state => state.filters);
    const {data: advertsOnPage} = useGetAdvertsByPageQuery(currentPage);
    const {data: allAdverts} = useGetAllAdvertsQuery();

    console.log("advertsOnPage")
    console.log(advertsOnPage)
    console.log('allAdverts', allAdverts);

    const prices = useMemo(
        () => getPrices(allAdverts),
        [allAdverts]
    );

    useEffect(() => {
        if (advertsOnPage?.length && !isFiltering(filters)) {
            console.log('adverts hook')
            setAllCars(prev => [...prev, ...advertsOnPage]);
        }
    }, [advertsOnPage]);

    useEffect(() => {
        console.log("filters catalog??", filters);
        if (isFiltering(filters)) {
            console.log('filter hook');
            const filteredAdverts = allAdverts?.filter(advert => {
                const makeFilter = filters.make && filters.make !== 'All' ? advert.make === filters.make : true;
                const priceFilter = filters.price && filters.price !== 'All' ? Number(advert.rentalPrice.slice(1)) <= filters.price : true;
                const mileMax = toNumber(filters.mileage?.max);
                const mileMin = toNumber(filters.mileage?.min);
                // const mileageFilter = filters.mileage?.max ? advert.mileage >= filters.mileage?.min && advert.mileage <= filters.mileage?.max : advert.mileage >= filters.mileage?.min;
                const mileageFilter = mileMax ? advert.mileage >= mileMin && advert.mileage <= mileMax : advert.mileage >= mileMin;
                return makeFilter && priceFilter && mileageFilter;
            });
            setAllCars(filteredAdverts);
        }
    }, [filters]);

    const onLoadMore = () => {
        console.log("onLoadMore");
        if (advertsOnPage.length) {
            dispatch(setCurrentPage(currentPage + 1));
        }
    }

    return (
        <div className="wrapper">
            <FilterDropdown prices={prices}/>
            <div className="catalog">
                {allCars && allCars.map((advert, i) => (
                    <AdvertCard key={nanoid()} advert={advert}/>))}
            </div>
            {!!advertsOnPage && !!advertsOnPage?.length && !isFiltering(filters)
            && <button className="load-more-button"
                       onClick={onLoadMore}>Load more</button>}

        </div>
    );
}

export default Catalog;
