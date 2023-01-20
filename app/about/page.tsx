"use client";

import Link from 'next/link';

import { Main } from 'components/Main';

export default function AboutPage() {
  return (
    <Main>
      <h2>Pagina Sobre</h2>

      <Link href="/">Dashboard</Link>
    </Main>
  );
}
