import React, { Component } from 'react'

export default class Event extends Component {
    constructor(props){
        super(props)
        this.state  = {
            taggle:true
        }
    }
    btn=(title,e) =>{
        console.log("bnt",title,e);
        let {taggle} = this.state;
        console.log(taggle);
        this.setState({
            taggle :!taggle
        })
        console.log(taggle);
    }
    handleClick=(e)=>{
        e.preventDefault();
        console.log("跳转",e);
    }
    render() {
        return (
            <div>
                <h1>事件处理</h1>
                <button onClick={this.btn.bind(this,'参数1')}>{this.state.taggle?'开':'关'}</button>
                <a href='https://naotu.baidu.com/file/e9d4e2ba8010e35152b3d5253ba3c556' onClick={this.handleClick}>点我跳转</a>
            </div>
        )
    }
}
