import React from 'react';
import PropTypes from 'prop-types';

export default class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isAllCheckd: false
        }
    }
    static propTypes = {
        allCount: PropTypes.number.isRequired,
        selectedCount: PropTypes.number.isRequired,
        delAllFinishedTodo: PropTypes.func.isRequired,
        dealSelectedAllTodo: PropTypes.func.isRequired
    }
    render(){
        const {allCount,selectedCount,delAllFinishedTodo,dealSelectedAllTodo}  = this.props
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" 
                    checked={allCount === selectedCount} 
                    onChange={() => dealSelectedAllTodo(allCount !== selectedCount)}
                    />
                </label>
                <span>
                    <span>已完成{selectedCount}件</span> / 总计{allCount}件
                </span>
                <button className="btn btn-warning" onClick={delAllFinishedTodo}>清除已完成任务</button>
            </div>
        )
    }
}