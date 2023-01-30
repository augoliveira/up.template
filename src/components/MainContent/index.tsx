'use client';
import React from 'react';
import Service from '#/ui/service/Service';
import { Fade, Flip } from 'react-awesome-reveal';
import * as S from './styles';


const Main = ({
  title = 'Principais soluções',
  description = 'CONHEÇA NOSSOS PILARES DE ATUAÇÃO',
}) => (
  <>
    <S.Wrapper>
      <S.Title>
        <Flip>{title}</Flip>
      </S.Title>

      <S.Description>{description}</S.Description>
      <Service />
    </S.Wrapper>
  </>
);

export default Main;
