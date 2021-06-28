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
            let stateChange = state;

            let indexChange = findIndex(state, todo =>{
                return todo.id === action.payload.id;
            })

            stateChange[indexChange] = {
                ...stateChange[indexChange],
                status : 1
            }
            return [
                ...stateChange,
            ];
            
        default:
            return state
    }
}

export default todoReducer