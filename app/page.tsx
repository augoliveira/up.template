'use client';

import { Contact } from '#/components/Contact/contact';
import { Footer } from '#/components/Footer/footer';
import { Links } from '#/components/Links';
import * as S from '#/styles/styles';
import { ScrollTop } from '#/components/ScrollTop';
import dynamic from 'next/dynamic';
import { Header } from '#/components/Header';

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
  return (
    <>
      <Header />
      <DynamicHeroHome />
      <S.Wrapper>
        <DynamicService />
        <DynamicDashboard />
      </S.Wrapper>
      <Contact />
      <Footer />
      <ScrollTop />
      <Links />
    </>
  );
}
