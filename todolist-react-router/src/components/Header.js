import React from 'react'
// import store from '../store/index'
import {addNewTodoAction} from '../store/actionCreators'
import {connect} from 'react-redux'
import { Button } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

class Header extends React.Component {
    constructor(props){
        super(props)
        // this.state = store.getState()
    }
    inputChange(e) {
        const {todos} = this.props
        const lastId = todos[todos.length-1].id
        if(e.target.value !== '' && e.keyCode === 13){
            let newTodo = {
                id: lastId+1,
                title: e.target.value,
                finished: false
            }
            this.props.addTodo(newTodo)
            e.target.value = ''
        }
    }   
    render(){
        return (
        <div className="todo-header">
            <input type="text" 
            onKeyDown={(e)=> this.inputChange(e)}
            placeholder="请输入今天的任务清单，按回车键确认"/>
            <Button type="primary" style={{margin: 10}}>提交</Button>
        </div>
      )
    }
} 
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo(newTodo) {
            const action = addNewTodoAction(newTodo)
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)