import React from 'react'
/**
 * js语句：
 *  
 * js表达式：一个表达式会产生一个值，
 *          可以放在任何一个需要值的地方
 * 
 * @returns 
 * 
 * 
 */

function List() {
    const title = '前端框架';
    const data = ['vue','react','angular'];
    return (
        <div>
            <h1>{title}</h1>
            <ul>
                {data}
                {
                   data.map(item =>{
                       return <li key={item}>{item}</li>
                   })
                }
            </ul>
        </div>
    )
}

export default List
