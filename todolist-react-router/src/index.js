import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import store from './store/index'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Todo from './components/Todo';
import IndexPage from './IndexPage.jsx'
import OtherPage from './OtherPage.jsx'
import ArticlePage from './components/articleDetail.jsx'

const App = (
     <Provider store={store}>
        <Router>
         <div>
            <ul className="Navbar">
               <li>
                  <Link to="/">首页</Link>
               </li>
               <li>
                  <Link to="/todolist">待办事项</Link>
               </li>
               <li>
                  <Link to="/other">其他</Link>
               </li>
            </ul>
            <div className="page-content">
               <Route path="/" exact component={IndexPage} />
               <Route path="/todoList" component={Todo} />
               <Route path="/other" component={OtherPage} />
               <Route path="/article/:id" component={ArticlePage} />
            </div>
         </div>
        </Router>
     </Provider>
)

ReactDOM.render(App, document.getElementById('root'));

serviceWorker.unregister();
