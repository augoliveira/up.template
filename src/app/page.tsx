'use client';
import { Suspense } from 'react';
import { Contact } from '#/components/Contact/contact';
import { Links } from '#/components/Links';
import dynamic from 'next/dynamic';
import Navbar from '#/components/Navbar';
import React from 'react';
import { Header } from '#/components/Header/page';
import Dashboard from 'templates/Dashboard';
import { Section } from '#/styles/styles';


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
          <Dashboard />

    </>
  );
}
