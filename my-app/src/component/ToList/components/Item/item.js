import React, { Component } from 'react'

export default class item extends Component {
    constructor(props){
        super(props)
        this.state = {
            mouse:false
        }
    }
    handelChage =(id) =>{
        return (e) =>{
          console.log(id,e.target.checked);
          console.log(this.props);
          let  {chageChecked} = this.props;
          chageChecked(id,e.target.checked);
        }
    }
    handelMouse = (flag) =>{
        return () =>{
            this.setState({
                mouse:flag
            })
        }
    }
    handelDelte = (id) =>{
        console.log(id);
        if(window.confirm('是否删除对应项')){
            let {deleteTodo}  = this.props;
            deleteTodo(id);
        }
    }


    render() {
        let {item} = this.props;
        return (
            <li  style={{backgroundColor:this.state.mouse?'red':'#fff'}}
            onMouseLeave={this.handelMouse(false)} 
            onMouseEnter={this.handelMouse(true)}>
				<label>
					<input type="checkbox" checked={item.done} onChange={this.handelChage(item.id)} />
					<span>{item.name}</span>
				</label>
				<button 
                style={this.state.mouse ? {display: 'inline-block'} : { display: 'none'}}  
                className="btn btn-danger"
                onClick={() =>this.handelDelte(item.id)}>删除</button>
			</li>
        )
    }
}
