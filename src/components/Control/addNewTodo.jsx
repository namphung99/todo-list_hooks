import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


addNewTodo.propTypes = {
    
};

function addNewTodo(props) {
    return (
        <Link 
            className = 'btn btn-primary'
            to = '/todos/add'
        >Add new todo</Link>
    );
}

export default addNewTodo;