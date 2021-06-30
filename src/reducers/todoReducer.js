import * as types from '../actions/type';
import {findIndex} from 'lodash';

const initialState = [];

function todoReducer (state = initialState, action) {
    switch (action.type) {
        case types.GET_ALL_TODOS:
            return state =action.payload;

        case types.CREATE_TODO:
            console.log('payload: ',action.payload);
            // return state;
            return [
                ...state,
                action.payload
            ];

        case types.DELETE_TODO:
            let index = findIndex(state, todo =>{
                return todo.id === action.payload;
            });
            let newState = [...state]
            newState.splice(index, 1);
            return [...newState];

        case types.SEARCH_TODO:
            return action.payload;

        case types.CHANGE_STATUS:
            let newStateChange = [...state];
            let newTodo = action.payload;

            let indexChange = findIndex(newStateChange, todo =>{
                return todo.id === action.payload.id;
            })

            newStateChange[indexChange] = newTodo;
            return [...newStateChange];

        case types.UPDATE_TODO: 
            let todosEdited = state;
            let indexEdited = findIndex(todosEdited, todo =>{
                return todo.id === action.payload.id;
            })

            todosEdited[indexEdited] = action.payload;

            return [...todosEdited];
            
        default:
            return state
    }
}

export default todoReducer