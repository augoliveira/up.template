'use client';
import { useState } from 'react';
import { Contact } from '#/components/Contact/contact';
import { Footer } from '#/components/Footer/footer';
import { Links } from '#/components/Links';
import * as S from '#/styles/styles';
import ScrollTop from '#/components/ScrollTop';
import dynamic from 'next/dynamic';
import { Header } from '#/components/Header/page';
import MainContent from '#/components/MainContent';

const DynamicDashboard = dynamic(() => import('templates/Dashboard'), {
  ssr: false,
});
const DynamicService = dynamic(() => import('../ui/service/Service'), {
  ssr: false,
});
const DynamicHeroHome = dynamic(() => import('#/components/HeroHome/parallax'), {
  ssr: false,
});

export default function Home() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <Header />
      <DynamicHeroHome />
      <MainContent />
      <DynamicDashboard />
      <Contact />
      <Footer />
      <Links />
    </div>
  );
}
