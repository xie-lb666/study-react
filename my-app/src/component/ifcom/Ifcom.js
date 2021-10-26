import React, { Component } from 'react'

export default class Ifcom extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLogin :true,
        }
    }
    haledChage= () =>{
        let {isLogin} = this.state;
        this.setState({
            isLogin :!isLogin
        })
    }
    render() {
        let {isLogin} = this.state;
        let btn ;
        if(isLogin){
            btn = <h1>我是登录的</h1>
        }else{
            btn = <h1>我是未登录的</h1>
        }
        return (
            <div>
                {btn}
                <button onClick={this.haledChage}>{isLogin?'注销':'登录'}</button>
            </div>
        )
    }
}
