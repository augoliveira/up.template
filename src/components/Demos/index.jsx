/* eslint-disable @next/next/no-img-element */
'use client';
import { Suspense } from 'react';
import { ExternalLink } from '#/ui/ExternalLink.tsx';
import addParlx from '#/common/addParlx'
import initIsotope from '#/common/initIsotope'
import { HeroSobre } from '#/components/HeroSobre';
import MainAbout from '#/components/MainAbout';
import HomeService from '#/components/HomeService';
import { Links } from '#/components/Links';
import dynamic from 'next/dynamic';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'
import Bg from '/public/bg-slide2.jpg'
import Seta from '../../../public/img/seta.png'

const BackgroundImage = dynamic(
  () => import('#/components/BG/BackgroundImage'),
  {
    ssr: false
  }
)


const Wrapper = styled.div`
  z-index: -1;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  display: flex;
`


const Demos = () => {
  const handleClick = () => {
    fbq.event('Purchase', { currency: 'USD', value: 10 })
  }
  const fixedHeader = React.useRef(null)
  const MainContent = React.useRef(null)

  React.useEffect(() => {
    setInterval(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + 'px'
      }
    }, 1000)
  }, [fixedHeader, MainContent])
  const [pageLoaded, setPageLoaded] = React.useState(false)
  React.useEffect(() => {
    setPageLoaded(true)
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope()
      }, 1000)
      addParlx()
      document.querySelector('body').style.backgroundColor = '#181b21'
    }
  }, [pageLoaded])

  return (
    <>
      <header
        ref={fixedHeader}
        className="works-header fixed-slider hfixd valign bg-img1"
        data-overlay-dark="4"
      >

        <Image
          src={Bg}
          alt="Picture of the author"
          fill
          placeholder="blur"
          blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
          quality={100}
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11 static">
              <div className="capt mt-50">
                <div className="parlx">
                  <h2
                    className="cta-5-title"
                    style={{ fontFamily: `Montserrat, sans-serif` }}
                  >
                    <font
                      className="klickart-font"
                      style={{ color: `#251867` }}
                    >
                      <b className="medium-b">O que a </b>
                      <font
                        className="klickart-font"
                        style={{ color: `rgb(255, 255, 255)` }}
                      >
                        <b className="medium-b">UP</b>
                      </font>
                      <b className="medium-b"> faz?</b>
                    </font>
                  </h2>
                  <p>
                    Nós cuidamos do seu futuro, para caminharmos juntos sempre.
                  </p>

                  <Typewriter
                    options={{
                      wrapperClassName: 'color-font fw-900',
                      strings: [
                        'Desenvolvimento de marca',
                        'Comunicação digital',
                        'Grafica e impressos',
                        'Desenvolvimento de sites, landing page',
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                    loop={true}
                    onInit={(typewriter) => {
                      typewriter;
                    }}
                  />
                  <div className="mt-5">
                  <button
                      type="button"
                      onClick={handleClick}
                    >
                      <ExternalLink href="https://wzap.me/121844149042">WhatsApp</ExternalLink>
                  </button>
                  </div>
                </div>
                <div className="bactxt custom-font valign">
                  <span className="full-width" style={{ color: 'transparent' }}>
                    UP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="main-content" ref={MainContent}>
      <section id="sobre">
      <div className="conteudo">
        <article className="rightShow" id="a-dinamite">
          <h2>AGENCIA <strong className="text-white">UP EXPERT</strong></h2>
          <h2>
            Up de<br />
            Criatividades estão<br />
            prontas para serem<br />
            utilizadas<span>.</span>
          </h2>
          <p>
            Somos uma <strong>AGÊNCIA FUL</strong> especializado em design com 8 anos de atuação no
            mercado pronta para fazer seu negócio decolar.
            <span
              ><b
                >Soluções em desenvolvimento para atrair o público alvo correto para sua empresa.</b
              ></span
            >
            Prezamos pela qualidade e exclusividade em cada projeto sempre com foco em
            passar a mensagem para um público específico.
          </p>
          <div id="ctas">
            <div className="box">
              VOCÊ QUER BAIXAR
              <br />A APRESENTAÇÃO <br />COMPLETA
              <Link
                className="ir soft-hover"
                href="#"
                target="_blank"
              >
                Clique Aqui
                <Image
                src={Seta}
                alt="Clique Aqui"
                // width={17} automatically provided
      // height={12} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
                />
              </Link>
            </div>
            <span id="ou">OU</span>
            <div className="box">
              DESEJA UM PROJETO
              <br />INCRÍVEL PARA <br />SEU NEGÓCIO?
              <Link className="ir soft-hover" href="#contato">
                Vamos Conversar
                <Image
                src={Seta}
                alt="Clique Aqui"
                // width={17} automatically provided
      // height={12} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
                />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
      </div>
    </>
  );
}

export default Demos
