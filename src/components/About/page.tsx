/* eslint-disable @next/next/no-img-element */
'use client';
import { RocketLaunch } from 'phosphor-react'
import { Container, Title } from '#/styles/styles'

export function About() {
  return (
    <Container id="about">
      <Title>
        Nossas especialidades
        <span>
          <RocketLaunch /> Conheça
        </span>
      </Title>
    </Container>
  );
}
