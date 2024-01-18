"use client"
import React from 'react';

const Button = () => {
    return (
        <div>
             <button class="bg-primary-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>console.log("client component")}>Click here</button>
            
        </div>
    );
};

export default Button;