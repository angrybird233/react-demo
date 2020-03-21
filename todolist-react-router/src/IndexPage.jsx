import React from 'react';
import {Link} from 'react-router-dom'
 export default class IndexPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            articleList: [
                {id: '001', title: '论当前国情和今日说法'},
                {id: '002', title: '今天你打卡了吗？'},
                {id: '003', title: '网红真的可以让人一夜暴富吗'},
                {id: '004', title: '程序猿真的都很牛逼吗'},
                {id: '005', title: '你见过最牛的程序员是什么样的？说出你的故事'},
            ]
        }
    }

    render(){
        const {articleList} = this.state
        return (
            <div>
                <h2>首页</h2>
                <h3 style={{textAlign:'left',textIndent: '3em'}}>文章列表</h3>
                <ul>
                    {articleList.map((item,index) => (
                        <li key={index}>
                            <Link to={'/article/'+item.id}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>

        )
    }
}
