import React from 'react';
// import store from '../store/index'
import {deleteAllFinishedTodoAction,isCheckAllTodosAction} from '../store/actionCreators'
import {connect} from 'react-redux'

 class Footer extends React.Component {
    constructor(props){
        super(props);
        // this.state = store.getState()

        // 订阅store的改变
        // this._handleStoreChange = this._handleStoreChange.bind(this);
        // store.subscribe(this._handleStoreChange);
    }
    // _handleStoreChange(){
    //     this.setState(store.getState())
    // }
    
    render(){
        const {todos, selectedCount,dealSelectedAllTodo,delAllFinishedTodo} = this.props
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" 
                    checked={todos.length> 0 && todos.length === selectedCount} 
                    onChange={() =>dealSelectedAllTodo(todos.length !== selectedCount)}
                    />
                </label>
                <span>
                    <span>已完成{selectedCount}件</span> / 总计{todos.length}件
                </span>
                <button className="btn btn-warning" onClick={()=>delAllFinishedTodo()}>清除已完成任务</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        selectedCount: state.selectedCount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delAllFinishedTodo(){
            const action = deleteAllFinishedTodoAction()
            dispatch(action)
        },
        dealSelectedAllTodo(flag){
            const action = isCheckAllTodosAction(flag)
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer)