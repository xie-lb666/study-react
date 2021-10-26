import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props){
        super(props);
        this.state= {date: new Date()};
    }
    componentDidMount(){
        console.log("组件渲染");
        // 加载一个定时器，定时修改 date
        this.timerid = setInterval(() =>{
            // 这里执行修改date 
            this.tick();
            // this.componentWillUnmount() //调用卸载的生命周期
        },1000)
    }
    componentWillUnmount(){
        console.log("组件卸载");
        clearInterval(this.timerid);
    }
    tick(){
        // console.log("每秒更新，触发");
        this.setState({
            date:new Date()
        })
    }
    render() {
        return (
            <div>
                <h1>Hello word</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}
