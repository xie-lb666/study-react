import React from 'react';

const Avatar = (props) => {
    return ( <
        div >
        <
        img src = {
            props.user.avatarUrl
        }
        alt = {
            props.user.name
        }
        /> <
        /div>
    );
};

export default Avatar;