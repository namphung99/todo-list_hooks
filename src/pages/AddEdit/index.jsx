import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import TodoForm from '../../components/TodoForm';
import * as actions from '../../actions/index';
import { useHistory, useParams } from 'react-router-dom';

AddEdit.propTypes = {
    
};


function AddEdit(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const {todoId} = useParams(); // Todo's id is edited
    const todoEdited = useSelector(state =>{
        return state.todos.find(todo => todo.id === parseInt(todoId));
    });
    const allTodos = useSelector(state => state.todos);

    console.log(todoEdited);

    const notify = (message) => toast.success(message,{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const randomNumber = (min, max) => {
        let isRandom = true;
        let randomNumber =  Math.floor(Math.random() * (max - min + 1)) + min;
        allTodos.forEach(todo => {
            if(randomNumber === todo.id){
                isRandom = false;
                return;
            }
        })
        if(isRandom === true){
            return randomNumber;
        }else{
            randomNumber(10000,99999);
        }
    }
    
    const isAddMode = !todoId;

    const initialValues = isAddMode ? 
    {
        title: '',
        status: 1
    } : todoEdited;


    const onSubmit = (todo) => {
        if(isAddMode){
            notify('Add todo successfully!!!');
            let newTodo = {
                id: randomNumber(10000, 99999),
                ...todo
            };
            dispatch(actions.createTodo(newTodo));
            history.push('/');
        }
        else{
            notify('Edit todo successfully!!!');
            dispatch(actions.EditTodo(todo));
            history.push('/');
        }

    }

    return (
        <div>
            <h1 className = 'text-center mb-4'>Add Todo</h1>
            <TodoForm 
                onSubmit = {onSubmit}
                initialValues = {initialValues}
                isAddMode = {isAddMode}
            />
        </div>
    );
}

export default AddEdit;