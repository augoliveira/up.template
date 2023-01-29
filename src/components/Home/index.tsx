/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import Typewriter from 'typewriter-effect';
import { Container } from '#/styles/styles';
import { Content, HomeText, Title, Description } from './styles';

export function HomeHero() {
  return (
    <Container>
      <Content>
        <HomeText>
          <Title>
            AGENCIA DE <code>MARKETING</code>
          </Title>
          <Description>
            AUMENTE SUAS VENDAS E FATURAMENTO COM
          </Description>
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
