const initialState ={
    age: 24
}

const reducer = (state = initialState,action) =>{
    if(action.type==="AGE_UP_ASYNC"){
        return{
            ...state,
            age: state.age+action.val
        }
    }
    if(action.type==="AGE_DOWN"){
        return{
            ...state,
            age: state.age-action.val
        }
    }
    return state
}

export default reducer