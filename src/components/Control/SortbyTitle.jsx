import React from 'react';
import PropTypes from 'prop-types';

Sort.propTypes = {
    
};

function Sort(props) {
    return (
        <div>
            <span className="sort-down"><i className="fas fa-sort-down"></i></span>
            <span className="sort-down"><i className="fas fa-sort-up"></i></span>
        </div>
    );
}

export default Sort;