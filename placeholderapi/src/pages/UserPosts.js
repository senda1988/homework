import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserPosts() {
    const { id } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getPosts() {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
            const data = await res.json();
            setPosts(data);
        }

        getPosts();
    }, [id]);

    if (posts.length === 0) {
        return <p>Loading posts...</p>;
    }

    return (
        <div>
            <h1>Posts by User {id}</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserPosts;
