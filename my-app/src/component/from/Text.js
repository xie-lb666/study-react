import React, { Component } from 'react'

export default class Text extends Component {
    constructor(props){
        super(props)
        this.state = {
            value:''
        }
    }
    handleSubmit = (e) =>{
        console.log("提交=======",this.state.value);
        e.preventDefault();
    }
    handleChange=(e) =>{
        console.log("========");
        this.setState({
            value:e.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>名字：
                        <input type="text" 
                        value={this.state.value}
                        onChange={this.handleChange}  />
                    </label>
                    <input type="submit" value="提交" />
                </form>
                <h1>输入的结果{this.state.value}</h1>
            </div>
        )
    }
}
