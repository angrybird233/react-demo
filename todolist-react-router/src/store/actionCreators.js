import {
    GET_ALL_TODOS,
    ADD_NEW_TODO,
    DELETE_TODO,
    DELETE_ALL_FINISHED_TODO,
    SELECT_TODO,
    IS_CHECKED_ALL_TODO_ITEM
} from './actionTypes'
import {getAllTodolist} from '../api/index'
import store from './index'
export const getAllTodoItemAction = (todos) => ({
    type: GET_ALL_TODOS,
    todos
})

export const initAllItemAction =() => {
    return (dispatch)=> {
        getAllTodolist().then(res => {
            if(res.success_code === 200){
                const todos = res.items
                store.dispatch({
                    type: GET_ALL_TODOS,
                    todos
                });
                // const action = getAllTodoItemAction(todos);
                // store.dispatch(action)
            }
        }).catch(error => {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
        })
    }
}

export const delTodoItemAction = (todoId) => ({
    type: DELETE_TODO,
    todoId
})

export const addNewTodoAction = (todo)=> ({
    type: ADD_NEW_TODO,
    todo
})

export const deleteAllFinishedTodoAction = ()=> ({
    type: DELETE_ALL_FINISHED_TODO
})

export const selectTodoAction = (todoId,flag) => ({
    type: SELECT_TODO,
    todoId,
    flag
})
export const isCheckAllTodosAction = (flag)=> ({
    type: IS_CHECKED_ALL_TODO_ITEM,
    flag
})
