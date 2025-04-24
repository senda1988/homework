import React, { useEffect, useState } from 'react'
import CardPost from '../components/CardPost';

function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function getPosts() {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();

            setPosts(data);
            console.log(data.map(p => p.userId));

        }

        getPosts()
    }, [])

    if (!posts) {
        return <p>Loading...</p>
    }
    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post => (
                <CardPost key={post.id} id={post.id} userId={post.userId} title={post.title} body={post.body} />
            ))}

        </div>
    )
}

export default Posts