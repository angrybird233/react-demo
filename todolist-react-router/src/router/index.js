import Todo from './components/Todo';
import IndexPage from './IndexPage.jsx'
import OtherPage from './OtherPage.jsx'
import ArticlePage from './components/articleDetail.jsx'

const routes = [
    {
        path: '/',
        component: IndexPage,
        exact: true,
        children: [
            {path: '/article', component: ArticlePage}
        ]
    },
    {path: '/todolist', component: Todo,},
    {path: '/other', component: OtherPage},

]

export default routes

//导入index.js, 然后可以通过循环的方式来动态渲染路由及组件