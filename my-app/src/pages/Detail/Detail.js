import React, { Component } from 'react'


const DetailData = [{
    id:'1',
    message:'你好中国'
},{
    id:'2',
    message:'你好啊谢华勇'
},{
    id:'3',
    message:'你好憨憨呀'
},{
    id:'4',
    message:'你好啊小鹿'
}]

export default class Detail extends Component {
    render() {
        console.log(this.props);
        // const {id} = this.props.match.params;
        const {id} = this.props.location.state ||  {};
        const findData = DetailData.find((item) =>{
            return item.id===id;
        }) ||{};
        return (
            <div>
                <h1>详情id=========={id}</h1>
                <h2>详情内容 ====={findData.message}</h2>
            </div>
        )
    }
}
