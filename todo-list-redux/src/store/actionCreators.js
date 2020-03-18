import {
    ADD_NEW_TODO,
    DELETE_TODO,
    DELETE_ALL_FINISHED_TODO,
    SELECT_TODO,
    IS_CHECKED_ALL_TODO_ITEM
} from './actionTypes'

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