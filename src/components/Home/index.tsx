/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import Typewriter from 'typewriter-effect';
import { Container } from '#/styles/styles';
import { Content, HomeText } from './styles';

export function HomeHero() {
  return (
    <Container>
      <Content>
        <HomeText>
          <h1>
            Agência de<code> Marketing</code>
          </h1>
          <h2>
            <blockquote>AUMENTE SUAS VENDAS E FATURAMENTO COM </blockquote>
            <h4>
              <span>TRÁFEGO P</span>
              <span>AG</span>
              <span>O</span>
            </h4>
          </h2>

          <h2 className="cta-5-title">
            <Typewriter
              options={{
                wrapperClassName: 'color-font fw-600',
                strings: [
                  'Aumentar o reconhecimento da sua marca',
                  'Aumentar o faturamento da sua empresa',
                  'Aumentar o seu número de vendas',
                  'Receber mais ligações',
                ],
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter;
              }}
            />
          </h2>
        </HomeText>
      </Content>
    </Container>
  );
}
