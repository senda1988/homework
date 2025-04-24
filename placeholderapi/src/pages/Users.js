import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserInfo from '../components/UserInfo';


function Users() {
    const { idUser } = useParams();

    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function getUsers() {

            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`);
            const data = await res.json();

            setUsers(data);


        }

        getUsers()
    }, []);
    if (!users) {
        return <p>Loading...</p>;
    }
    return (
        <div>
            <UserInfo name={users.name} email={users.email} phone={users.phone} />
        </div>
    )
}

export default Users