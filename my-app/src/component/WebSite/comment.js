import React from 'react';
import UserInfo from './userInfo';

const Comment = () => {
    const state = {
        date:new Date(),
        text:'文字描述',
        author: {
            name: 'Hello Kitty',
            avatarUrl: 'https://placekitten.com/g/64/64',
          },
    }
    return (
        <div>
            <div>
                <UserInfo userinfo={state.author}/>
            <p>{state.author.name}</p>          
            </div>
            <div>{state.text}</div>
            <div>时间 {state.date?'0':'2'}</div>
        </div>
    );
};

export default Comment;