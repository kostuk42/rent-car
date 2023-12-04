// components/Pagination/Pagination.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/paginationSlice';
import './Pagination.css';

const Pagination = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.pagination.currentPage);

    const handlePageChange = (newPage) => {
        dispatch(setCurrentPage(newPage));
        // Fetch and display adverts for the new page
    };

    // Assuming you have the total number of pages available
    const totalPages = 10; // Replace with your actual total number of pages

    return (
        <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={currentPage === index + 1 ? 'active' : ''}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
}

export default Pagination;
