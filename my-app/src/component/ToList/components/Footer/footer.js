import React, { Component } from 'react'

export default class Footer extends Component {
	handelAllToDo = (e) =>{
		let {chageallToDo} = this.props; 
		chageallToDo(e.target.checked);
	}
	clearAllToDo = (e) =>{
		let {clearAllToDo} = this.props;
		clearAllToDo();
	}
    render() {
		const {list} = this.props;
		let doneCount = list.reduce((pre,current) =>{
			return pre+  (current.done?1:0);
		},0);
		const total = list.length;
        return (
            <div>
                <label>
					<input type="checkbox" 
					checked={total == doneCount &&total!=0 }
					onChange={this.handelAllToDo}/>
				</label>
				<span>
					<span>已完成 {doneCount}</span> / 全部 {total}
				</span>
				<button  className="btn btn-danger" onClick={this.clearAllToDo}>清除已完成任务</button>
            </div>
        )
    }
}
