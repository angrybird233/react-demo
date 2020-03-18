import React  from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'
import store from './store/index'

class App extends  React.Component{
  constructor() {
    super();
    this.state = store.getState()
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
}


export default App;
