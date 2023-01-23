'use client';
import { Suspense } from 'react';
import { Contact } from '#/components/Contact/contact';
import { Links } from '#/components/Links';
import dynamic from 'next/dynamic';
import { Header } from '#/components/Header/page';
import MainContent from '#/components/MainContent';

const DynamicDashboard = dynamic(() => import('templates/Dashboard'), {
  ssr: false,
});
const DynamicHeroHome = dynamic(
  () => import('#/components/HeroHome/parallax'),
  {
    ssr: false,
  },
);

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div>Loadin Header...</div>}>
        <Header />
      </Suspense>
      <Suspense fallback={<div>Loadin DynamicHeroHome...</div>}>
        <DynamicHeroHome />
      </Suspense>
      <Suspense fallback={<div>Loadin MainContent...</div>}>
        <MainContent />
      </Suspense>
      <Suspense fallback={<div>Loadin DynamicDashboard...</div>}>
        <DynamicDashboard />
      </Suspense>
      <Suspense fallback={<div>Loadin Contact...</div>}>
        <Contact />
      </Suspense>
      <Suspense fallback={<div>Loadin Links...</div>}>
        <Links />
      </Suspense>
    </div>
  );
}
