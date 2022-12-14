const initialState={
    todos:['mithra','mohan','mukesh']
}

function todoReducer(state=initialState,action){

        if(action.type==='DEF'){
            return {...state.todos,todos:[...state.todos,action.payload]}
        }
        if(action.type==='GHI'){
            var temp = [...state.todos]
            temp.splice(action.payload,1)
            return {...state, todos:[...temp]}
        }

return state
}

export default todoReducer