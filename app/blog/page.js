import React from 'react';
import Link from 'next/link'
export const metadata = {
    title: 'Blog page',
    description: 'Generated by create next app',
  }
  
const blog = () => {
    const blogs=[
        {
            id:1,
            name:"blog 1",
            descrition:"nothing"
        },
        {
            id:2,
            name:"blog 2",
            descrition:"no"
        },
    ]
    return (
        <div>
            <h2>Blogs list</h2>
                {blogs.map((blog)=>(
                    <li key={blog.id}>
                      <Link href={`blog/${blog.id}`}>{blog.name}</Link>
                    </li>
                ))}
        </div>
    );
};

export default blog;