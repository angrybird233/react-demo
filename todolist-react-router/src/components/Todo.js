import React, {Component} from 'react';
import Header from './Header'
import Footer from './Footer'
import List from './List'
import {initAllItemAction} from '../store/actionCreators'
// import store from '../store/index'
// import {getAllTodolist} from '../api/index'
import {connect} from 'react-redux';

class Todo extends Component{

  render(){
    return (
      <div className="todo-container">
        <h1>React todo list demo</h1>
        <div className="App todo-wrap">
          <header className="App-header">
            <Header/>
            <List/>
            <Footer/>
          </header>
        </div>
      </div>
    )
  }
  componentDidMount() {
    // const action = initAllItemAction()
    // store.dispatch(action)
    this.props.reqTodolist();
  }

}

const mapDispatchToProps = (dispatch)=> {
    return {
        reqTodolist(){
            const action = initAllItemAction()
            dispatch(action)
        }
    }
}


export default connect(null,mapDispatchToProps)(Todo);
