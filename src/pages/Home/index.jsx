import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useHistory } from 'react-router-dom';

import './style.css';
import * as actions from '../../actions/index';
import TodoList from '../../components/TodoList/TodoList';
import Control from './Control';


const notify = (message) => toast.success(message,{
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});

function Home(props) {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const history= useHistory();
    const [todoChange, setTodoChange] = useState('');


    useEffect(() =>{
        const params = {};
        dispatch(actions.getAll(params));
        history.push({
            pathname: ''
        })
    }, []);

    const confirmDelete = (id) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                  <div className='custom-delete'>
                    <h5>Are you sure?</h5>
                    <div className = 'body-confirm'>
                        <p>You want to delete this todo?</p>
                        <button className='btn-no' onClick={onClose}>No</button>
                        <button
                        className='btn-yes'
                        onClick={() => {
                            dispatch(actions.deleteTodo(id))
                            notify('Delete successfully!!!')
                            onClose();
                        }}
                        >
                        Yes, Delete it!
                        </button>
                    </div>
                  </div>
                );
              }
        });
        // return isDelete;
    };

    function handleDeleteTodo(id){
        confirmDelete(id)
    }

    useEffect(() => {
        dispatch(actions.ChangeStatus(todoChange));
        
      }, [todoChange]);
    function handleChangeStatus(todo){
            setTodoChange(todo)
    }

    return (
        <div className = 'content'>
            <h1 className = 'text-center mt-5'>Todo List</h1>
           <Control />
            <TodoList 
                todos = {todos}
                handleDeleteTodo = {handleDeleteTodo}
                handleChangeStatus = {handleChangeStatus}
            />
            <ToastContainer />
        </div>
    );
}

export default Home;