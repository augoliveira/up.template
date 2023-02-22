/* eslint-disable @next/next/no-img-element */
'use client';

import { ExternalLink } from '#/ui/ExternalLink.tsx';
import addParlx from '#/common/addParlx'
import initIsotope from '#/common/initIsotope'
import { Button, Highlight } from "#/ui/button";
import { ChevronIcon } from "../icons/chevron";
import dynamic from 'next/dynamic';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'
import PortfolioCustomColumn from "../Portfolio-custom-column/page";
import WorksThreeColumnWithFilter from "#/components/Works-three-column-with-filter";



import Bg from '/public/bg-slide2.jpg'
import Seta from '../../../public/img/seta.png'
import Case1 from '/public/assets/dinamite/Gestor/upoads/cases/1.jpg'
import Case2 from '/public/assets/dinamite/Gestor/upoads/cases/2.jpg'
import Case3 from '/public/assets/dinamite/Gestor/upoads/cases/3.jpg'
import Case4 from '/public/assets/dinamite/Gestor/upoads/cases/4.jpg'
import Case5 from '/public/assets/dinamite/Gestor/upoads/cases/5.jpg'
import Case6 from '/public/assets/dinamite/Gestor/upoads/cases/6.jpg'
import Case7 from '/public/assets/dinamite/Gestor/upoads/cases/7.jpg'
import Case8 from '/public/assets/dinamite/Gestor/upoads/cases/8.jpg'
import Case9 from '/public/assets/dinamite/Gestor/upoads/cases/9.jpg'
import Case10 from '/public/assets/dinamite/Gestor/upoads/cases/10.jpg'
import Case11 from '/public/assets/dinamite/Gestor/upoads/cases/11.jpg'
import Case12 from '/public/assets/dinamite/Gestor/upoads/cases/12.jpg'

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
  const [displayImage, setDisplayImage] = useState(true);

  useEffect(() => {
    setDisplayImage(false);
  }, []);

  return (
    <>
      <header
        ref={fixedHeader}
        className="works-header fixed-slider hfixd valign bg-img"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11 static">
              <div className="capt mt-50">
                <div className="parlx">
                  <Button
                    className="translate-y-[-1rem] animate-fade-in opacity-0"
                    href="https://wzap.me/121844149042"
                    variant="secondary"
                    size="small"
                  >
                    <span>Agência de estratégia digital</span>{" "}
                    <Highlight>→</Highlight>
                  </Button>
                  <h2
                    className="cta-5-title"
                    style={{ fontFamily: `Montserrat, sans-serif` }}
                  >
                    <font
                      className="klickart-font"
                      style={{ color: `#6E4BEC` }}
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
                  <h3>
                    <Typewriter
                      options={{
                        wrapperClassName: "color-font fw-900",
                        strings: [
                          "Desenvolvimento de marca",
                          "Comunicação digital",
                          "Grafica e impressos",
                          "Desenvolvimento de sites, landing page",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                      loop={true}
                      onInit={(typewriter) => {
                        typewriter;
                      }}
                    />
                  </h3>

                <div>
                <Button
                  className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
                  href="/"
                  variant="primary"
                  size="large"
                >
                  <span>WhatsApp </span>
                  <Highlight>
                    <ChevronIcon />
                  </Highlight>
                </Button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="main-content" ref={MainContent}>
      <WorksThreeColumnWithFilter filterPosition="right" />
      </div>
    </>
  );
}

export default Demos
