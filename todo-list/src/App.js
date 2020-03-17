import React  from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'

class App extends  React.Component{
  constructor() {
    super();
    this.state = {
      todos: [
        {id: 1, title: '看一小时React的课程', finished: false},
        {id: 2, title: '打一小时台球', finished: true},
        {id: 3, title: '看一小时Java的课程', finished: false},
        {id: 4, title: '看一小时Python的课程', finished: false},
      ],
      selectedCount: 0
    }
  }
  componentDidMount() {
    const {todos} = this.state;
    let selectedCount = 0;
    todos.map(item => {
      if(item.finished){
        selectedCount += 1;
      }
    })
    this.setState({
      selectedCount
    })
  }
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
  addNewTodo = (item) => {
    const {todos} = this.state;
    todos.push(item);
    this.setState({
      todos
    })
  }
  deleteTodo = (id) =>{
    const {todos} = this.state;
    todos.map((item,index)=> {
      if(item.id === id){
        todos.splice(index,1)
      }
    })
    this.setState({
      todos
    })
  }

  delAllFinishedTodo =() => {
    const {todos} = this.state;
    const unFinishedTodos = todos.filter(item => {
      return item.finished === false
    })
    this.setState({
      todos: unFinishedTodos,
      selectedCount: 0
    })
  }
  selectFinishedTodo =(id,flag) => {
    const {todos} = this.state;
    let finishedCount = 0;
    todos.map(item => {
      if(item.id === id){
        item.finished = flag
      }
      if(item.finished){
        finishedCount += 1;
      }
    })
    this.setState({
      todos,
      selectedCount: finishedCount
    })
  }
  dealSelectedAllTodo =(flag) => {
    const {todos} = this.state;
    todos.map(item => {
      item.finished = flag
    })
    this.setState({
      todos,
      selectedCount: flag ? todos.length : 0
    })
  }
  render(){
    const {todos,selectedCount}  = this.state
    return (
      <div className="todo-container">
        <h1>React todo list demo</h1>
        <div className="App todo-wrap">
          <header className="App-header">
            <Header addNewTodo={this.addNewTodo} todos={todos}/>
            <List todos = {todos} deleteTodo={this.deleteTodo} selectFinishedTodo={this.selectFinishedTodo} />
            <Footer 
              allCount={todos.length} 
              todos = {todos}
              selectedCount={selectedCount} 
              dealSelectedAllTodo={this.dealSelectedAllTodo}
              delAllFinishedTodo={this.delAllFinishedTodo}
              />
          </header>
        </div>
      </div>
    )
  }
}


export default App;
