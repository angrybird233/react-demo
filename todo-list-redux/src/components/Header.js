import React from 'react'
import store from '../store/index'
import {addNewTodoAction} from '../store/actionCreators'
export default class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = store.getState()
    }
    inputChange(e) {
        const {todos} = this.state
        const lastId = todos[todos.length-1].id
        if(e.target.value !== '' && e.keyCode === 13){
            let newTodo = {
                id: lastId+1,
                title: e.target.value,
                finished: false
            }
            const action = addNewTodoAction(newTodo)
            store.dispatch(action)
            e.target.value = ''
        }
    }   
    render(){
        return (
        <div className="todo-header">
            <input type="text" 
            onKeyDown={(e)=> this.inputChange(e)}
            placeholder="请输入今天的任务清单，按回车键确认"/>
        </div>
      )
    }
} 