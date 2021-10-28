import React, { Component } from 'react'
import Item from '../Item/item'

export default class List extends Component {
    chageChecked = (id,checked) =>{
        let {putChecked} = this.props;
        putChecked(id,checked);
    }
    deleteTodo = (id) =>{
        let {deleteTodo}  =this.props;
        deleteTodo(id);
    }

    render() {
        const {list } = this.props;
        return (
            <div>
                <ul className="todo-main">
                    {
                        list.map((item) =>{
                            return <Item  
                            key={item.id} 
                            chageChecked={this.chageChecked}
                            item={item}
                            deleteTodo={this.deleteTodo}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}
