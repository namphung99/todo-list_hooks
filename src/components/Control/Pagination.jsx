import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

Pagination.propTypes = {
    
};

function Pagination(props) {
    const {pagination, onPageChange} = props;
    const {_page, _limit, _totalRows} = pagination;
    const totalPages = Math.ceil(_totalRows/_limit);
    console.log(totalPages)
    const handlePageChange = (newPage) => {
        if(onPageChange){
            onPageChange(newPage)
        }
    }

    return (
        <nav className = "nav__pagination">
            <button  
                disabled= {_page <= 1 ? 'disabled' : ''}
                onClick = {() => handlePageChange(_page-1)}
                className = {_page <= 1 ? 'btn__pagination prev-btn disabled': 'btn__pagination prev-btn'}>
                Prev
            </button>
            <span className = "page-text">{_page}</span>
            <button 
                onClick = {() => handlePageChange(_page+1)}
                className = "btn__pagination next-btn">
                Next
            </button>
        </nav>
    );
}

export default Pagination;