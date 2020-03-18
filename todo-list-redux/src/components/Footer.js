import React from 'react';
import store from '../store/index'
import {deleteAllFinishedTodoAction,isCheckAllTodosAction} from '../store/actionCreators'
export default class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = store.getState()

        // 订阅store的改变
        this._handleStoreChange = this._handleStoreChange.bind(this);
        store.subscribe(this._handleStoreChange);
    }
    _handleStoreChange(){
        this.setState(store.getState())
    }
    delAllFinishedTodo(){
        console.log(1)
        const action = deleteAllFinishedTodoAction()
        store.dispatch(action)
    }
    dealSelectedAllTodo(flag){
        console.log(flag)
        const action = isCheckAllTodosAction(flag)
        store.dispatch(action)
    }
    render(){
        const {todos, selectedCount} = this.state
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" 
                    checked={todos.length> 0 && todos.length === selectedCount} 
                    onChange={() => this.dealSelectedAllTodo(todos.length !== selectedCount)}
                    />
                </label>
                <span>
                    <span>已完成{selectedCount}件</span> / 总计{todos.length}件
                </span>
                <button className="btn btn-warning" onClick={()=> this.delAllFinishedTodo()}>清除已完成任务</button>
            </div>
        )
    }
}