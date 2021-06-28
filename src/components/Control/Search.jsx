import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.css';

SearchTodo.propTypes = {
    handleSearchTodo: PropTypes.func
};

function SearchTodo(props) {
    const {handleSearchTodo} = props;
    const [valueSearch, setValueSearch] = useState('');

    function onHandleChange(e){
        const value = e.target.value;
        setValueSearch(value);
    }

    function onSearch(e){
        e.preventDefault();
        handleSearchTodo(valueSearch);
    }

    return (
        <form className = 'search'>
            <input 
                type="text" 
                name = 'valeSearch' 
                className = 'search__input' 
                placeholder = 'Enter search term' 
                value = {valueSearch}
                onChange = {onHandleChange}
            />
            <button 
                className = 'btn btn-primary' 
                type = 'submit'
                onClick = {onSearch}
            >Search</button>
        </form>
    );
}

export default SearchTodo;