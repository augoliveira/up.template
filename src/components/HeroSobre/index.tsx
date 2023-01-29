'use client';
import Image from 'next/image'
import SetaD from '/public/img/seta.png'
import BgAbuot from '../../../public/business.png'
import { DownloadSimple, User } from 'phosphor-react'
import { Container, Title } from '../../styles/styles'
import { ButtonPrimary } from '../../styles/styles'
import { AboutContainer } from './styles'
import { HiArrowRight } from 'react-icons/hi';

export function HeroSobre() {
  return (
    <Container id="about">
      <Title>
        Sobre
        <span>
          <User /> About
        </span>
      </Title>
      <AboutContainer>
        <div className="AboutImg">
          <Image
            className="AboutImg"
            src={BgAbuot} alt={''}
            placeholder="blur"
          />
        </div>

        <div className="aboutContent">
          <div className="aboutDescription">
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
                >Brasil, Estados Unidos, Inglaterra, Índia, Tailândia, Itália,
                Israel, Austrália, Peru, Suíça, Portugal, França e Turquia.</b
              ></span
            >
            Temos muito conhecimento sobre o mercado internacional. Prezamos
            pela qualidade e exclusividade em cada projeto sempre com foco em
            passar a mensagem para um público específico.

          </p>

          <div id="ctas">
            <div className="box">
              VOCÊ QUER BAIXAR
              <br />A APRESENTAÇÃO <br />COMPLETA

              <a
                className="ir soft-hover"
                href="arquivos/apresentacao.pdf"
                target="_blank"
              >
                Clique Aqui <HiArrowRight className="block w-4 bg-yellow-400"/>
              </a>
            </div>

            <span id="ou">OU</span>

            <div className="box">
              DESEJA UM PROJETO
              <br />INCRÍVEL PARA <br />SEU NEGÓCIO?

              <a className="ir soft-hover" href="#contato">
                Vamos Conversar
                <HiArrowRight className="block w-4 bg-yellow-400"/>
              </a>
            </div>
          </div>
        </article>
          </div>
          <a href="/pdf/Evander-Curriculo.pdf" download>
            <ButtonPrimary>
              <b>Download CV</b> <DownloadSimple weight="bold" />
            </ButtonPrimary>
          </a>
        </div>
      </AboutContainer>
    </Container>
  )
}
