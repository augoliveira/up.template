'use client';
import { Suspense } from 'react';
import { Contact } from '#/components/Contact/contact';
import { Links } from '#/components/Links';
import dynamic from 'next/dynamic';
import Navbar from '#/components/Navbar';
import { useEffect, useState } from 'react'
import { Case } from '#/components/Case/page';



const Dashboard = dynamic(() => import('templates/Dashboard'), {
  ssr: false,
});


export default function Home() {
   // The default value is 'blue', it will be used during pre-rendering and the first render in the browser (hydration)
    const [color, setColor] = useState('blue')
   // During hydration `useEffect` is called. `window` is available in `useEffect`. In this case because we know we're in the browser checking for window is not needed. If you need to read something from window that is fine.
   // By calling `setColor` in `useEffect` a render is triggered after hydrating, this causes the "browser specific" value to be available. In this case 'red'.
    useEffect(() => setColor('red'), [])
  return (
    <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem] bg-gray-1100 bg-fixed bg-[url('/grid.svg')]">
          <Dashboard />
    </div>
  );
}
