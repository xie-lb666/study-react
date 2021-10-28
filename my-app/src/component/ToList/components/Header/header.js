import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            nameValue:''
        }
    }
    static propTypes= {
        addTodo:PropTypes.func.isRequired
    }
    handelChage = (e) =>{
        this.setState({
            nameValue:e.target.value
        })
        // console.log(this.state.nameValue);
    }
    handelKeyup = (e) =>{
        // console.log(e.code);
        if(e.code==='Enter'){
            // 往父组件传递值
            let {addTodo} = this.props;
            addTodo(this.state.nameValue)
            this.setState({
                nameValue:""
            })
        }
    }
    render() {
        return (
            <div>
                <input type="text" 
                value={this.state.nameValue}
                placeholder="请输入你的任务名称，按回车键确认"
                onChange={this.handelChage}
                onKeyUp={this.handelKeyup}/>
            </div>
        )
    }
}
