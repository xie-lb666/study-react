import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import News from '../News/News'
import Message from '../Message/Message'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>我是Home的内容</h3>
                <hr/>
                <Link to="/home/news">news</Link>
                <Link to="/home/message">message</Link>
                <Route path="/home/news" component={News}></Route>
                <Route path="/home/message" component={Message}></Route>
            </div>
        )
    }
}
