import React, {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AdvertCard from '../../components/AdvertCard/AdvertCard';
import FilterDropdown from '../../components/FilterDropdown/FilterDropdown';
import {setCurrentPage} from '../../redux/paginationSlice';
import {useGetAdvertsByPageQuery, useGetAllAdvertsQuery} from "../../redux/api";
import './Catalog.css';
import {nanoid} from "nanoid";
import {filterAdverts, getPrices, isFiltering} from "../../services/utils";

const Catalog = () => {
    const dispatch = useDispatch();
    const [allCars, setAllCars] = useState([]);
    const currentPage = useSelector(state => state.pagination.currentPage);
    const filters = useSelector(state => state.filters);
    const {data: advertsOnPage} = useGetAdvertsByPageQuery(currentPage);
    const {data: allAdverts} = useGetAllAdvertsQuery();
    const prices = useMemo(
        () => getPrices(allAdverts),
        [allAdverts]
    );

    const onLoadMore = () => {
        if (advertsOnPage?.length) {
            dispatch(setCurrentPage(currentPage + 1));
        }
    }

    useEffect(() => {
        if (advertsOnPage?.length && !isFiltering(filters)) {
            setAllCars(prev => [...prev, ...advertsOnPage]);
        }
    }, [advertsOnPage]);

    useEffect(() => {
        if (isFiltering(filters)) {
            setAllCars(filterAdverts(allAdverts, filters));
        } else {
            setAllCars([]);
            if (advertsOnPage && currentPage === 1) {
                setAllCars([...advertsOnPage])
            } else {
                dispatch(setCurrentPage(1));
            }
        }
    }, [filters, allAdverts]);

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
