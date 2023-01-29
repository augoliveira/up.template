'use client';
import { Suspense } from 'react';
import { Contact } from '#/components/Contact/contact';
import { Links } from '#/components/Links';
import dynamic from 'next/dynamic';
import { Header } from '#/components/Header/page';

const DynamicDashboard = dynamic(() => import('templates/Dashboard'), {
  ssr: false,
});
const Demos = dynamic(
  () => import('#/components/Demos/index'),
  {
    ssr: false,
  },
);

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loadin Header...</div>}>
        <Header />
      </Suspense>
      <Suspense fallback={<div>Loadin DynamicHeroHome...</div>}>
        <Demos />
      </Suspense>
    </>
  );
}
