import { React, useMemo } from 'react';
import styled from 'styled-components';
import { MdScreenSearchDesktop, MdDesignServices } from 'react-icons/md';
import { MdOutlineTungsten, MdOutlineDriveFileRenameOutline, MdOutlineOfflineShare } from 'react-icons/md';
import { GoRocket } from 'react-icons/go';
import Card from './Card';
import { Fade, Flip } from 'react-awesome-reveal';

const Service = () => {
  return (
    <Content id="service">
      <Cards>
        <Fade left>
          <Card
            Icon={MdDesignServices}
            title={'UX Design'}
            desc={
              'responsivos(adaptados a smartphones e tablets), otimizados para rankear no google, painel administrativo.'
            }

          />
        </Fade>
        <Fade bottom>
          <Card
            Icon={MdOutlineTungsten}
            title={'Estratégia de Marketing'}
            desc={
              'Marketing de atração com estratégias de SEO, Produção de de Conteúdo para blog, whitepapers, e-books, infográficos e Redes Sociais. Eveniet iure rerum obcaecati et laborum earum!'
            }
          />
        </Fade>
        <Fade left>
          <Card
            Icon={GoRocket}
            title={'SEO'}
            desc={
              'Otimização de palavras-chave, conteúdo para Blog e Sites, backlinks, semântica, sitemap e auditoria de SEO. Eveniet iure rerum obcaecati et laborum earum!'
            }
          />
        </Fade>
      </Cards>
      <Cards>
        <Fade left>
          <Card
            Icon={MdScreenSearchDesktop}
            title={'Tráfego Pago'}
            desc={
              'publicidade online. Links patrocinados, displays, native ads e social ads – AdWords, Facebook, Instagram, Linkedin, entre outros.'
            }
          />
        </Fade>
        <Fade bottom>
          <Card
            Icon={MdOutlineDriveFileRenameOutline}
            title={'Design & Concept'}
            desc={
              'Comunicação estratégica através de: Outdoor, Fachada, Vitrine, Folders, Cartão de visita, Papelaria, Sinalização, Logotipo.'
            }
          />
        </Fade>
        <Fade left>
          <Card
            Icon={MdOutlineOfflineShare}
            title={'Mídias Sociais'}
            desc={
              'Produção de conteúdo multiplataforma: vídeo, gif, texto, infográfico, testes, gestão e SAC 2.0 para mídia sociais.'
            }
          />
        </Fade>
      </Cards>
    </Content>
  );
};

export default Service;

const Content = styled.div`
  h1 {
    padding-top: 1rem;
  }
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  @media (max-width: 970px) {
    width: 100%;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 4rem;
&:hover > div {
    filter: brightness(1.3);
    filter: invert(1) drop-shadow(0 0 0.3rem #ffffff70);
    transform: translateY(-20px);
  }
`;
