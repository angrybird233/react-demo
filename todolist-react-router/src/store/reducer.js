import {
    GET_ALL_TODOS,
    ADD_NEW_TODO,
    DELETE_TODO,
    DELETE_ALL_FINISHED_TODO,
    SELECT_TODO,
    IS_CHECKED_ALL_TODO_ITEM
} from './actionTypes'

const defaultState = {
    todos: [],
    selectedCount: 0
}
export default (state = defaultState , action) => {
    const newState = {...state};
    let selectedCount = 0;
    switch (action.type) {
        case GET_ALL_TODOS:
            newState.todos = action.todos
            return newState
        case DELETE_TODO:
            newState.todos.map((item,index)=> {
                if(item.id === action.todoId){
                    newState.todos.splice(index, 1)
                }
            })
            newState.todos.map((item,index) => {
                if(item.finished){
                    selectedCount += 1;
                }
            })
            newState.selectedCount = selectedCount
            return newState
        case ADD_NEW_TODO:
            newState.todos.push(action.todo)
            return newState
        case DELETE_ALL_FINISHED_TODO:
            let unFinishTodos = newState.todos.filter(item => {
                return item.finished === false
            })
            newState.selectedCount = 0
            newState.todos = unFinishTodos
            return newState
        case SELECT_TODO:
            newState.todos.map((item,index)=> {
                if(item.id === action.todoId){
                    item.finished = action.flag
                }
                if(item.finished){
                    selectedCount += 1
                }
            })
            newState.selectedCount = selectedCount
            return newState
        case IS_CHECKED_ALL_TODO_ITEM:
            if(action.flag){
                newState.todos.map(item => {
                    item.finished = action.flag
                })
                newState.selectedCount = newState.todos.length
            }else{
                newState.selectedCount = 0
            }
            return newState
        default:
            return state
    }
}
