import React from 'react';
import PropTypes from 'prop-types';
// import store from '../store/index';
import {delTodoItemAction,selectTodoAction } from '../store/actionCreators'
import {connect} from 'react-redux'

 class Item extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isShow: false
        }
    }
    static propTypes = {
        todo: PropTypes.object.isRequired
    }

    changeDelBtnVisible(flag){
        this.setState({
            isShow: flag
        })
    }
    render(){
        const {todo, deleteRow, selectFinishedTodo} = this.props
        const {isShow} = this.state
        return (
            <li 
            onMouseOver={()=> this.changeDelBtnVisible(true)} 
            onMouseOut={() => this.changeDelBtnVisible(false)}>
                <label>
                    <input type="checkbox" 
                    checked={todo.finished} 
                    onChange={()=>selectFinishedTodo(todo.id,!todo.finished)} />
                    <span>{todo.title}</span>
                </label>
                <button className="btn btn-warning" 
                style={{display: isShow?'inline-block':'none'}}
                onClick={()=> deleteRow(todo.id)}>删除</button>
            </li>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteRow(id){
            const action = delTodoItemAction(id);
            dispatch(action)
        },
        selectFinishedTodo(id,flag){
            const action = selectTodoAction(id,flag)
            dispatch(action)
        }
    }
}
export default connect(null, mapDispatchToProps)(Item)