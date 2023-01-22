'use client';
import { VercelLogo } from "./VercelLogo";

export default function Footer({
  reactVersion,
  nextVersion,
}: {
  reactVersion: string;
  nextVersion: string;
}) {
  return (
    <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
      <div className="rounded-lg bg-black/30 backdrop-blur-xl">
        <Byline />
      </div>
    </div>
  );
}
function Byline() {
  return (
    <div className="flex items-center justify-between gap-x-4 p-3.5 lg:px-5 lg:py-3">
      <div className="flex items-center gap-x-1.5">
        <div className="text-sm text-gray-400">Desenvolvido por</div>
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
