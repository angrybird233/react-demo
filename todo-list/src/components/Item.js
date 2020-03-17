import React from 'react';
import PropTypes from 'prop-types';

export default class Item extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isShow: false
        }
    }
    static propTypes = {
        todo: PropTypes.object.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        selectFinishedTodo: PropTypes.func.isRequired
    }

    deleteRow(id){
        const {deleteTodo} = this.props
        deleteTodo(id)
    }
    changeDelBtnVisible(flag){
        this.setState({
            isShow: flag
        })
    }
    render(){
        const {todo,selectFinishedTodo} = this.props
        const {isShow} = this.state
        return (
            <li 
            onMouseOver={()=> this.changeDelBtnVisible(true)} 
            onMouseOut={() => this.changeDelBtnVisible(false)}>
                <label>
                    <input type="checkbox" 
                    checked={todo.finished} 
                    onChange={()=> selectFinishedTodo(todo.id,!todo.finished)} />
                    <span>{todo.title}</span>
                </label>
                <button className="btn btn-warning" 
                style={{display: isShow?'inline-block':'none'}}
                onClick={()=> this.deleteRow(todo.id)}>删除</button>
            </li>
        )
    }
}