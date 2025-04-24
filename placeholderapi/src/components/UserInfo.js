import React from 'react';
import './user.css'

function UserInfo(props) {
    return (
        <div className="user-info">
            <strong>Name :</strong> {props.name}<br />
            <strong>Email :</strong>{props.email}<br />
            <strong>Phone :</strong>{props.phone}

        </div>
    )
}

export default UserInfo