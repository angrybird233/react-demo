import React from 'react';
import PropTypes from 'prop-types';
import store from '../store/index';
import {delTodoItemAction,selectTodoAction } from '../store/actionCreators'

export default class Item extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isShow: false
        }
    }
    static propTypes = {
        todo: PropTypes.object.isRequired
    }

    deleteRow(id){
        // const {deleteTodo} = this.props
        // deleteTodo(id)
        const action = delTodoItemAction(id);
        store.dispatch(action)

    }
    changeDelBtnVisible(flag){
        this.setState({
            isShow: flag
        })
    }
    selectFinishedTodo(id,flag){
        const action = selectTodoAction(id,flag)
        store.dispatch(action)
    }
    render(){
        const {todo} = this.props
        const {isShow} = this.state
        return (
            <li 
            onMouseOver={()=> this.changeDelBtnVisible(true)} 
            onMouseOut={() => this.changeDelBtnVisible(false)}>
                <label>
                    <input type="checkbox" 
                    checked={todo.finished} 
                    onChange={()=> this.selectFinishedTodo(todo.id,!todo.finished)} />
                    <span>{todo.title}</span>
                </label>
                <button className="btn btn-warning" 
                style={{display: isShow?'inline-block':'none'}}
                onClick={()=> this.deleteRow(todo.id)}>删除</button>
            </li>
        )
    }
}