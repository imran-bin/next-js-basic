import React from 'react';
import Link from 'next/link'
export const metadata = {
    title: 'About page',
    description: 'Generated by create next app',
  }
  
const aboutLayout = ({children}) => {
    return (
        <main>
            <div>
                <nav>
                    <hr />
                    <ul className="flex gap-6">
                        <li><Link href="/about/mission">Mission</Link></li>
                        <li><Link href="/about/vission">Vission</Link></li>
                    </ul>
                </nav>
                {children}
            </div>
        </main>
    );
};

export default aboutLayout;