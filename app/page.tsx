'use client';

import dynamic from 'next/dynamic';

const DynamicDashboard = dynamic(() => import('templates/Dashboard'), {
  ssr: false,
});
const DynamicService = dynamic(() => import('../ui/service/Service'), {
  ssr: false,
});
const DynamicExperiencias = dynamic(() => import('../ui/Experiencias'), {
  ssr: false,
});
const DynamicHeroHome = dynamic(() => import('#/components/HeroHome/parallax'), {
  ssr: false,
});


export default function Home() {
  return (
    <>
      <DynamicHeroHome />
      <DynamicService />
      <DynamicExperiencias />
      <DynamicDashboard />
    </>
  );
}
