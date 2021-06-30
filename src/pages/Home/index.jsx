import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';

import './style.css';
import * as actions from '../../actions/index';
import TodoList from '../../components/TodoList/TodoList';
import Control from './Control';
import Pagination from '../../components/Control/Pagination';


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
    const [sort, setSort] = useState({
        _sort: 'title',
        _order: 'asc'
    })

    // pagination

    const [filters, setFilters] = useState({
        _page:1,
        _limit:5,
        _totalRows: 10
    });
    useEffect(() =>{

        const params = queryString.stringify(filters);
        dispatch(actions.getAll(params));
        history.push({
            pathname: `/todos`,
            search: `?${params}`
        })
    }, [filters]);

    const handlePageChange = (newPage) => {
        console.log(newPage)
        setFilters({
            ...filters,
            _page: newPage
        })
    }

    // Delete
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

    const handleDeleteTodo = (id) => {
        confirmDelete(id)
    }

    const handleChangeStatus = (todo) => {
        let newTodo = {...todo}
        switch(newTodo.status){
            case 1:
                newTodo.status = 2;
                break;
            case 2:
                newTodo.status = 3;
                break;
            case 3:
                newTodo.status = 1;
                break;

            default:
                return newTodo;
        }
        dispatch(actions.ChangeStatus(newTodo))
    }

    //  Edit
    const  handleEditTodo = (todo) => {
        const editUrl = `/todos/${todo.id}`;
        history.push(editUrl);
    }

    // Sort
    const [isSort, setIsSort] = useState(false);
    useEffect(() =>{
        const sortParam = queryString.stringify(sort);
        const fectchTodoSort = () => {
            dispatch(actions.getAll(sortParam));
            history.push({
                pathname: `/todos`,
                search: `?${sortParam}`
            })
        }
        if(isSort){
            fectchTodoSort();
            setIsSort(false)
        }
    },[sort]);

    const handleSortTitle = (newOrder) => {
        setIsSort(true)
        setSort({
            ...sort,
            _order: newOrder
        })
    }

    return (
        <div className = 'content'>
            <h1 className = 'text-center mt-5'>Todo List</h1>
           <Control />
            <TodoList 
                todos = {todos}
                handleDeleteTodo = {handleDeleteTodo}
                handleChangeStatus = {handleChangeStatus}
                handleEditTodo = {handleEditTodo}

                onSort = {handleSortTitle}
                sortTitle = {sort}
                isSort = {isSort}
            />
            <Pagination 
                pagination = {filters}
                onPageChange = {handlePageChange}
            />
            <ToastContainer />
        </div>
    );
}

export default Home;