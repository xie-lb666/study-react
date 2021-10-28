import React, { Component } from 'react'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import List from './components/List/list'
export default class ToDoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            list :[{
                name:'马大哈',
                id:'1',
                done:true
            },{
                name:'马二哈',
                id:'2',
                done:false
            },{
                name:'马三哈',
                id:'3',
                done:false
            }]
        }
    }
    addList = (item) =>{
        let {list}  = this.state;
        let len = list.length;
        list.push({name:item,id:len+1,done:false});
        this.setState({
            list:this.state.list
        })
    }
    chageToDo = (id,checked)=>{
        console.log(id,checked);
        // 改变对应id的值
        let newlist = this.state.list.map(item =>{
            if(item.id==id){
                item.done = checked;
            }
            return item;
        })
        this.setState({
            list:newlist
        })
    }
    deleteTodo = (id) =>{
        const {list} = this.state;
        let newlist = list.filter((item) =>{
            return item.id!==id
        })
        this.setState({
            list:newlist
        })
    }
    chageallToDo = (flag) =>{
        let newlist = this.state.list.map(item =>{
            item.done = flag;
            return item
        })
        this.setState({
            list:newlist
        })
    }
    clearAllToDo = () =>{
        let newlist = this.state.list.filter(item =>{
            return !item.done;
        });
        this.setState({
            list:newlist
        })
    }
    render() {
        return (
            <div>
                <h1>这是todolist</h1>
                <Header addTodo={this.addList}/>
                <List 
                list={this.state.list} 
                putChecked={this.chageToDo}
                deleteTodo={this.deleteTodo}/>
                <Footer list={this.state.list} 
                chageallToDo={this.chageallToDo}
                clearAllToDo={this.clearAllToDo}/>
            </div>
        )
    }
}
