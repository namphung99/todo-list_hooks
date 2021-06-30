import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select'

import {FILTER_STATUS_OPTIONS} from '../../constants/global';

FilterStatus.propTypes = {
    
};


function FilterStatus(props) {
    const options = FILTER_STATUS_OPTIONS;
    return (
        <div className="form-group filter-form">
            <span className = 'label-filter-status'>Filter Status: </span>
            <select className="form-control form-control--select ">
                {
                    options.map((option, index) =>{
                        return <option value={option.value} key={index}>{option.label}</option>
                    })
                }
            </select>
        </div>
    )
}

export default FilterStatus;