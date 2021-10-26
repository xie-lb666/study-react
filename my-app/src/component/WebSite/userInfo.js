import React from 'react';
import Avatar from './avatar'
const UserInfo = (props) => {
    return (
        <div>
            <Avatar user={props.userinfo}/>
            <h1>名字：{props.userinfo.name}</h1>
        </div>
    );
};

export default UserInfo;