import { Main } from 'components/Main/';
import dynamic from 'next/dynamic';
import { HeroSobre } from '#/components/HeroSobre/index'
import * as S from '#/styles/styles'
import HeroHome from '#/components/HeroHome/parallax';
import { Section } from '#/styles/styles';
import Link from 'next/link';
import { About } from '#/components/About/page';
import { Contact } from '#/components/Contact/contact';
import { Footer } from '#/components/Footer/footer';


const Dashboard = () => {
  return (
    <Main>
<HeroSobre />
      {/* Nao precisa mais da tag <a/> como children */}
      <Link
        href={{
          pathname: '/about',
          query: { name: 'test' },
        }}
      >
        About
      </Link>
    </Main>
  );
};

export default Dashboard;
