
import Button from '@/app/components/Button';
import React from 'react';
import Image from 'next/image'
import nexjsimg from '@/public/images/next_js.jpeg'
const mission = () => {
    return (
        <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur 
            quaerat nisi distinctio, maxime iusto necessitatibus facere quas aut voluptates 
            architecto laborum obcaecati porro commodi dolorem deleniti, ipsum a sed suscipit amet 
            dignissimos velit qui exercitationem eum tenetur! Iure, sequi rem, excepturi officia 
            accusamus optio,adipisci natus dolore illo inventore voluptatum?
             <Image src={nexjsimg} alt='Next js image' quality={100} placeholder='blur'></Image>
            <Button></Button>
        </div>
    );
};

export default mission;