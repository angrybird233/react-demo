import React from 'react'
import PropTypes from 'prop-types'
export default class Header extends React.Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        addNewTodo: PropTypes.func.isRequired
    }
    inputChange(e) {
        const {todos,addNewTodo} = this.props
        const lastId = todos[todos.length-1].id
        if(e.target.value !== '' && e.keyCode === 13){
            let newTodo = {
                id: lastId+1,
                title: e.target.value,
                finished: false
            }
            addNewTodo(newTodo)
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