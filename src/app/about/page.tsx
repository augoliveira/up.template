"use client";

import Link from 'next/link';
import AboutHeader from "#/components/About-header";
import AboutIntro from "#/components/About-intro";
import { Main } from 'components/Main';

export default function AboutPage() {
  return (
    <Main>
      <AboutHeader />
      <AboutIntro />

      <Link href="/">Dashboard</Link>
    </Main>
  );
}
