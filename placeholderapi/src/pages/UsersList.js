import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserInfo from '../components/UserInfo';

function UsersList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers() {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setUsers(data);
        }

        getUsers();
    }, []);

    if (!users) {
        return <p>Loading...</p>;
    }
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}/posts`}><UserInfo name={user.name} email={user.email} phone={user.phone} /></Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UsersList