import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Prop extends Component {
    constructor(props){
        // 
        super(props)
        this.state = {

        }
    }
    static  propTypes = {
        name:PropTypes.string.isRequired,
        age:PropTypes.number.isRequired,
        sex:PropTypes.string
    }
    static defaultPops = {
        name:'哈哈哈',
        sex:'男',
        age:18
    }
    render() {
        return (
            <div>
                <ul>
                    <li>姓名：{this.props.name}</li>
                    <li>性别：{this.props.sex}</li>
                    <li>年龄：{this.props.age}</li>
                </ul>
            </div>
        )
    }
}



// function Prop(props){
//     return (
//         <div>
//         <ul>
//             <li>姓名：{props.name}</li>
//             <li>性别：{props.sex}</li>
//             <li>年龄：{props.age}</li>
//         </ul>
//         </div>
//                 )

// }
// export default Prop;