'use client';
import './styles.css'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Seta from '../../../public/img/seta.png'
import Link from 'next/link';

const BackgroundImage = dynamic(
  () => import('#/components/BG/BackgroundImage'),
  {
    ssr: false
  }
)

export function HeroSobre() {
  return (
    <section id="sobre">
      <BackgroundImage />
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
                href="arquivos/apresentacao.pdf"
                target="_blank"
              >
                Clique Aqui <Image src={Seta} alt="Clique Aqui" placeholder="blur"/>
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
                placeholder="blur"
                />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
