import React from 'react';
import PropTypes from 'prop-types'
import Item from './Item'
export default class List extends React.Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        selectFinishedTodo: PropTypes.func.isRequired
    }
    render(){
        const {todos,deleteTodo,selectFinishedTodo}  = this.props;
        return (
            <ul className="todo-main">
                {
                    todos.map((item,index) =>(
                        <Item key={index} todo={item} 
                        selectFinishedTodo={selectFinishedTodo}
                        deleteTodo={deleteTodo} />
                    ))
                }
            </ul>
        )
    }
}