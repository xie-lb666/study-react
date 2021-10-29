import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';
import Detail from '../Detail/Detail';
export default class Message extends Component {
    state = {
        messageArr:[{
            id:'1',
            title:'消息1'
        },{
            id:'2',
            title:'消息2'
        },{
            id:'3',
            title:'消息3'
        },{
            id:'4',
            title:'消息4'
        }]
    }
    render() {
        const {messageArr } = this.state;
        return (
            <div>
                <ul>
                    {
                        messageArr.map((item) =>{
                            return (
                                <li key={item.id}>
                                 {/* <Link to={`/home/message/detail/${item.id}`}>{item.title}</Link>   */}
                                 <Link 
                                 to={{pathname:'/home/message/detail',state:{id:item.id}}}>
                                     {item.title}</Link>  
                                </li>
                            )
                        })
                    }
                </ul>
                <h1>下面是详情</h1>
                {/* <Route path="/home/message/detail/:id" component={Detail}></Route> */}
                <Route path="/home/message/detail" component={Detail}></Route>
            </div>
        )
    }
}
