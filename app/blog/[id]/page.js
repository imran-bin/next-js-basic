import { notFound } from 'next/navigation'
import React from 'react';

const singleBlog = ({params}) => {
    const {id} =params
    if(id == "3"){
        notFound();
    }
    return (
        <div>
            Blog id is : {id}
            
        </div>
    );
};

export default singleBlog;