import React, { Component } from 'react'

export default class Refss extends Component {
    constructor(props){
        super(props);
        this.myRef1 = React.createRef();
        this.myRef2 = React.createRef();
    }
   handelValue = () =>{
        console.log("======",this.myRef1.current.value);
    }
    handelBlur = () =>{
        console.log(this.myRef2.current.value);
    }
    render() {
        return (
            <div>
                <input ref={this.myRef1} type="text" placeholder='点击按钮提示数据'/>
                <button onClick={this.handelValue}>点我提示左侧的数据</button>
                <input onBlur={this.handelBlur} ref={this.myRef2} type="text" placeholder='失去焦点提示数据'/>
            </div>
        )
    }
}
