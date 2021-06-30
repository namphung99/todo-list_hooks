import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import queryString from 'query-string';

import * as actions from '../../actions/index';
import AddNewTodo from '../../components/Control/addNewTodo';
import SearchTodo from '../../components/Control/Search';
import FilterStatus from '../../components/Control/FilterStatus';



Control.propTypes = {
    
};

function Control(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    function handleSearchTodo(value){
        const searchTerm = `q=${value}`;
        dispatch(actions.getAll(searchTerm));
        history.push({
            pathname: '/todos',
            search: `?title=${value}`
        })
    }
    return (
        <div className="control">
               <div style = {{display: 'flex'}}>
                    <AddNewTodo />
                    <SearchTodo
                        handleSearchTodo = {handleSearchTodo}
                    />
               </div>
               <FilterStatus />
           </div>
    );
}

export default Control;