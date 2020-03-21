import React from 'react';
import Item from './Item'
// import store from '../store/index'
import {connect} from 'react-redux'

 class List extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state =  store.getState()

    //     this._handleStoreChange = this._handleStoreChange.bind(this)
    //     store.subscribe(this._handleStoreChange)

    // }
    // _handleStoreChange(){
    //     this.setState(store.getState())
    // }

    render(){
        const {todos} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map((item,index) =>(
                        <Item key={index} todo={item} />
                    ))
                }
            </ul>
        )
    }
}
const mapStateToProps = (state) => {
    return  {
        todos: state.todos
    }
}

export default connect(mapStateToProps, null)(List)