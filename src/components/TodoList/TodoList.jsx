import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

function TodoList(props) {
    const {
            todos, handleDeleteTodo,
            handleChangeStatus, handleEditTodo,
            onSort, sortTitle
        } = props;

        const {_order} = sortTitle;
        let [isSort, setIsSort] = useState(false);

        const handleDisplaySort = () =>{
            setIsSort(true);
            onSort('asc');
        }

    return (
        <div className = 'todo-list'>

            <table className="table mt-4">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th className = 'todo-th'scope="col">
                        
                        {
                          !isSort ?  <span
                            className="sort-title"
                            onClick={() => handleDisplaySort()}
                          > <i class="fas fa-sort"></i> </span> :
                        _order == 'asc' ? 
                            <span 
                                className="sort-title"
                                onClick={() => onSort('desc')}
                                data-toggle="tooltip" data-placement="right" title="A - Z"
                            > <i class="fas fa-sort-alpha-down"></i> </span> : 
                            <span 
                                className="sort-title"
                                onClick={() => onSort('asc')}
                                data-toggle="tooltip" data-placement="right" title="Z - A"
                            ><i class="fas fa-sort-alpha-down-alt"></i></span>
                        }
                        Todo</th>
                    <th style = {{position:'relative'}} scope="col">
                        Status
                    </th>
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
                                        className = {todo.status === 1 ? 'status' : todo.status === 2 ? 'status process' : todo.status === 3 ?'status completed' : ''}
                                        onClick = {() => handleChangeStatus(todo)}
                                    >
                                        {todo.status == 1 ? 'Todo' : todo.status == 2 ? 'Process' : todo.status == 3 ? 'Completed': ''}
                                    </button>
                                </td>
                                <td>
                                    <span 
                                        className = 'delete-btn mr-4'
                                        onClick = {() => handleDeleteTodo(todo.id)}
                                    >
                                        <i className="fas fa-trash mr-2"></i>
                                        Delete</span>
                                    <span 
                                        className = 'update-btn'
                                        onClick = {() => handleEditTodo(todo)}
                                    >
                                        <i className="fas fa-pencil-alt mr-2"></i>
                                        Update</span>
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