 import getAllPost from '@/lib/getAllPost';
 import Link from 'next/link'
import React from 'react';
 const post =async () => {
    const posts = await getAllPost()
    return (
        <div>
            {posts.map(post=>(
                <li key={post.id}>
                    <Link href={`post/${post.id}`}>{post.title}</Link>
                    </li>
            ))}
            
        </div>
    );
 };
 
 export default post;