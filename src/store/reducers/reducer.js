import todoReducer from "./todo.reducer";
import {combineReducers} from 'redux';


var reducer = combineReducers({
    todos: todoReducer
})
    
export default reducer
