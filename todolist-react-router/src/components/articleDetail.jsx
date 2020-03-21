import React from 'react';
import qs from 'qs'
import { Button } from 'antd';

 export default class ArticleDetail extends React.Component {
    constructor(props){
        super(props);
    }

    toTodoListPage (){
        this.props.history.push('/')
    }

    render(){
        return (
            <div>
                <Button type="primary" onClick={() => this.toTodoListPage()}>返回首页</Button>
                <h3>文章详情</h3>
            </div>

        )
    }

    componentDidMount() {
        // 获取路由里面传的参数：
        // <Route path="/article/:id" component={ArticlePage} />
        // 1. /path/001    使用 this.props.match.params
        console.log(this.props);
        console.log(this.props.match.params);
        // 2. /path?id=001  使用 this.props.location.search
        // console.log(this.props.location.search.split('?')[1])
        // console.log(qs.parse(this.props.location.search.split('?')[1]))
    }
}
