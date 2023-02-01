'use client';

import { DefaultTags } from "#/ui/DefaultTags";
import Script from "next/script";

export default function Head() {
  return (
    <>
      <DefaultTags />
      <title>UP.EXPERT | Agência de publicidade</title>
      <meta
        name="description"
        content="Conheça nossa Agência de Marketing Digital e Tecnologia e descubra como transformar os resultados da sua empresa. Acesse e saiba mais!"
      />
      <Script src="https://code.jquery.com/jquery-3.3.1.js" strategy="worker"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" strategy="worker"></Script>
      <Script src="https://unpkg.com/scrollreveal/dist/scrollreveal.min.js" strategy="worker"></Script>
      <Script src="../lib/OwlCarousel/dist/owl.carousel.min.js" strategy="worker"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.11.7/TweenMax.min.js" strategy="worker"></Script>
      <Script src="../lib/selectFx/classie.js" strategy="worker"></Script>
      <Script src="../lib/selectFx/selectFx.js" strategy="worker"></Script>
      <Script src="/js/main.js" type="text/javascript" strategy="worker"></Script>
      <Script src="/js/home.js" type="text/javascript" strategy="worker"></Script>
      <Script src="/js/carregamento-lote.js" type="text/javascript" strategy="worker"></Script>
      <Script src="/js/parallax.js"strategy="worker" ></Script>
    </>
  );
}
