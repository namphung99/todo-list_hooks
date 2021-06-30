import todosApi from '../api/todoApi';
import * as types from './type';

export const getAll = (params) => async (dispatch) =>{
    try {
        const response = await todosApi.getAll(params);
        dispatch({
            type: types.GET_ALL_TODOS,
            payload: response
        });
        
    } catch (error) {
        console.log(error);
    } 
}

export const createTodo = (data) => async (dispatch) => {
    try {
        const response = await todosApi.create(data);
        dispatch({
            type: types.CREATE_TODO,
            payload: response
    })
    return Promise.resolve(response);
    } catch (error) {
        return Promise.reject(error);
    }
}

export const deleteTodo = (id) => async (dispatch) => {
    try {
        await todosApi.remove(id);
        dispatch({
            type: types.DELETE_TODO,
            payload: id,
        })
    } catch (error) {
        // Promise.reject(error)
        console.log(error);
    }
}

export const Search = (valeSearch) => async (dispatch) => {
    try {
        const response = await todosApi.search(valeSearch);
        dispatch({
            type: types.SEARCH_TODO,
            payload: response
        })
    } catch (error) {
        console.log(error)
    }
}

export const ChangeStatus = (todo) => async (dispatch) => {
    try {
        const id = todo.id;
        const res = await todosApi.update(id,todo);
        dispatch({
            type: types.CHANGE_STATUS,
            payload: todo
        })
        console.log('res is: ',res)
        return Promise.resolve(res);
    } catch (error) {
        console.log(error)
        Promise.reject(error);
    }
}

export const EditTodo = (todo) => async (dispatch) => {
    const id = todo.id;
    try {
        await todosApi.update(id, todo);

        dispatch({
            type: types.UPDATE_TODO,
            payload: todo
        })
    } catch (error) {
        Promise.reject(error)
    }
}