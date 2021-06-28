import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as actions from '../../actions/index';
import AddNewTodo from '../../components/Control/addNewTodo';
import SearchTodo from '../../components/Control/Search';



Control.propTypes = {
    
};

function Control(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    function handleSearchTodo(value){
        dispatch(actions.Search(value));
        history.push({
            // pathname: '/search',
            search: `?title=${value}`
        })
    }
    return (
        <div className="control">
               <AddNewTodo />
               <SearchTodo
                    handleSearchTodo = {handleSearchTodo}
               />
           </div>
    );
}

export default Control;