
import '#/styles/globals.css';
import '#/styles/bootstrap.min.css';
import '#/styles/dark.css'
import '#/styles/mqueries.css';
import '#/styles/css/animate.css';
import '#/styles/css/modal.css';
import '/lib/selectFx/cs-select.css';
import '/lib/selectFx/cs-skin-border.css';


import Head from './head';
import { VercelLogo } from '#/ui/VercelLogo';
import { Header } from '#/components/Header/page';
import { CopyrightLinearBanner } from '#/ui/copyright-linear-banner';
import Script from 'next/script';
import Cursor from '#/components/Cursor';
import ScrollTop from '#/components/ScrollTop';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="PT-BR" className="[color-scheme:dark]">
      <Head />
      <body>
      <Cursor />
    <ScrollTop />
        <div className="rounded-lg p-3.5 lg:p-0">
          {children}
          <Script
        id="isotope"
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script id="wow" src="/js/wow.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
          </div>
        <div className="mx-auto max-w-full space-y-8 px-8 pt-20 lg:py-8 lg:px-64">
          <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black/30 backdrop-blur-xl">
                <Byline />
              </div>
            </div>
          </div>
        </div>
        <CopyrightLinearBanner />
      </body>
    </html>
  );
}
function Byline() {
  return (
    <div className="flex items-center justify-between gap-x-8 p-3.5 lg:px-5 lg:py-3">
      <div className="flex items-center gap-x-1.5">
        <a href="https://upexpert.com.br" title="up.expert">
          <div className="w-16 text-gray-100 hover:text-gray-50">
            <VercelLogo />
          </div>
        </a>
      </div>

      <div className="text-sm text-gray-400">
        <a
          className="text-orange-500 hover:text-gray-400"
          href="https://upexpert.com.br"
          target="_blank"
          rel="noreferrer"
        >
          Agência de propaganda
        </a>
        {'  '}
        <a
          className="underline decoration-dotted underline-offset-4 hover:text-gray-400"
          href="https://upexpert.com.br/design"
          target="_blank"
          rel="noreferrer"
        >
          Design Estratégico
        </a>
      </div>
    </div>
  );
}
