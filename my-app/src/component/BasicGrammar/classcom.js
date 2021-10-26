import React, { Component } from 'react'

export default class Classcom extends Component {
    constructor (props){
        super(props)
    }
    state = {
        isHot:true,
        user:{
            name:'xhy'
        }
    }
    click = () =>{
        let {isHot} = this.state;
        this.setState({
            isHot:!isHot
        })
    }
    render() {
        return (
            <div>
                <h1 onClick={this.click}> 类构造的组件xzdz{this.state.isHot?'炎热':'寒冷'}</h1>
            </div>
        )
    }
}
