import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import TodoForm from '../../components/TodoForm';
import * as actions from '../../actions/index';
import { useHistory } from 'react-router-dom';

AddEdit.propTypes = {
    
};


function AddEdit(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const notify = (message) => toast.success(message,{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    function onSubmit(todo) {
        notify('Add user successfully!!!');
        dispatch(actions.createTodo(todo));
        history.push('/');

    }

    return (
        <div>
            <h1 className = 'text-center mb-4'>Add Todo</h1>
            <button 
            onClick = {() => notify("hello")}
            className = 'btn btn-primary'>Test</button>
            <TodoForm 
                onSubmit = {onSubmit}
            />
        </div>
    );
}

export default AddEdit;