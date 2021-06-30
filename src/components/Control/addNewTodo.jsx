import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css'


addNewTodo.propTypes = {
    
};

function addNewTodo(props) {
    return (
        <Link 
            className = 'btn btn-primary add-btn'
            to = '/todos/add'
        >
            <i className="fas fa-plus"></i>
            Add new todo</Link>
    );
}

export default addNewTodo;