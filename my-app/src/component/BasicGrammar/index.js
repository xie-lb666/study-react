// function Basic(props){
//     return <h1>helloe === xhy
//         <h3>{props.name}</h3>
//     </h1>
// }


// export default Basic;
import React from 'react';
import './index.css'

const Basic = props => {
    return (
        <div>
            <h1 className='title' id={props.id}>hello ==={props.name}</h1>
            <h2 style={{color:'yellow'}}>哈哈哈，我是内联样式</h2>
        </div>
    );
};


export default Basic;