import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

function TodoList(props) {
    const {todos, handleDeleteTodo, handleChangeStatus} = props;

    function onDeleteTodo(id){
        handleDeleteTodo(id);
    }

    function onChangeStatus(todo){
        handleChangeStatus(todo);
    }
    return (
        <div className = 'todo-list'>

            <table className="table mt-4">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Todo</th>
                    <th scope="col">Status</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                {
                    todos.map((todo, index) =>{
                        return (
                            <tr key={index}>
                                <th scope="row">{index +1}</th>
                                <td style={{textAlign: 'start'}}>{todo.title}</td>
                                <td>
                                    <button
                                        className = {todo.status == 1 ? 'status' : todo.status == 2 ? 'status process' : todo.status == 3 ?'status completed' : ''}
                                        onClick = {() => onChangeStatus(todo)}
                                    >
                                        {todo.status == 1 ? 'Todo' : todo.status == 2 ? 'Process' : todo.status == 3 ? 'Completed': ''}
                                    </button>
                                </td>
                                <td>
                                    <span 
                                        className = 'delete-btn mr-4'
                                        onClick = {() => onDeleteTodo(todo.id)}
                                    >Delete</span>
                                    <span className = 'update-btn'>Update</span>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
}

export default TodoList;