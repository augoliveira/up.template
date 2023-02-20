'use client';
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Link from 'next/link';

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

export function Case() {
  return (
    <section id="cases">
    <div className="conteudo-fluid">
      <header>
        <h1 className="leftShow">CASES</h1>
        <nav className="rightShow">
          <ul>
            <li className="soft-hover filter" id="design">DESIGN GRÁFICO</li>
            <li className="soft-hover filter" id="id">IDENTIDADE VISUAL</li>
            <li className="soft-hover filter" id="website">WEBSITE</li>
            <li className="soft-hover filter" id="capa">CAPA CD/DVD</li>
            <li className="soft-hover filter" id="redes">REDES SOCIAIS</li>
            <li className="soft-hover filter ativo ultimo" id="todos">TODOS</li>
          </ul>
          <br />
        </nav>

        <div className="select" id="slct-home">
          <select
            name="slct"
            name1="categoria-case"
            className="cs-select cs-skin-border"
          >
            <option disabled="disabled" selected="selected">
              SELECIONE UMA OPÇÃO
            </option>
            <option value="todos">TODOS</option>
            <option value="design">DESIGN GRÁFICO</option>
            <option value="id">IDENTIDADE VISUAL</option>
            <option value="website">WEBSITE</option>
            <option value="redes">REDES SOCIAIS</option>
          </select>
        </div>

        <br />
      </header>
    </div>

    <div id="container">
      <div className="case redes todos">
        <div className="case-ative">
          <Image
          src={Case1}
            alt="Picture of the author"
            placeholder="blur"
            blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            quality={100}
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="case-hover">
          <span className="categoria">REDES SOCIAIS</span>
          <h2>Comunidade Plagiados</h2>
          <hr />
          <Link href="/portfolio/comunidade-plagiados-1-0" className="soft-hover"
            >Veja o Case
            <Image
            src={Seta} alt='seta'
          /></Link>
        </div>
      </div>

      <div className="case id todos">
        <div
          className="case-ative">
          <Image
            src={Case2}
            alt="Picture of the author"
            placeholder="blur"
            blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            quality={100}
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="case-hover">
          <span className="categoria">IDENTIDADE VISUAL</span>
          <h2>Rino Maromba</h2>
          <hr />
          <a href="/portfolio/rino-maromba" className="soft-hover"
            >Veja o Case <Image src={Seta}
          /></a>
        </div>
      </div>

      <div className="case design todos">
        <div
          className="case-ative">
          <Image
          src={Case3}
            alt="Picture of the author"
            placeholder="blur"
            blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            quality={100}
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="case-hover">
          <span className="categoria">DESIGN GRÁFICO</span>
          <h2>Marjore Fios</h2>
          <hr />
          <Link href="/portfolio/marjore-fios-2" className="soft-hover"
            >Veja o Case <Image src={Seta}
          /></Link>
        </div>
      </div>

      <div className="case id todos">
        <div
          className="case-ative">
          <Image
          src={Case4}
            alt="Picture of the author"
            placeholder="blur"
            blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            quality={100}
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="case-hover">
          <span className="categoria">IDENTIDADE VISUAL</span>
          <h2>Inventório</h2>
          <hr />
          <Link href="/portfolio/inventorio" className="soft-hover"
            >Veja o Case <Image src={Seta}
          /></Link>
        </div>
      </div>

      <div className="case id todos">
        <div
          className="case-ative">
            <Image
              src={Case5}
              alt="Picture of the author"
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
              quality={100}
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
          />
          </div>
        <div className="case-hover">
          <span className="categoria">IDENTIDADE VISUAL</span>
          <h2>MLHS</h2>
          <hr />
          <Link href="/portfolio/mlhs" className="soft-hover"
            >Veja o Case <Image src={Seta}
          /></Link>
        </div>
      </div>

      <div className="case id todos">
        <div
          className="case-ative">
          <Image
              src={Case6}
              alt="Picture of the author"
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
              quality={100}
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
          />
        </div>
        <div className="case-hover">
          <span className="categoria">IDENTIDADE VISUAL</span>
          <h2>Plagiados - Jornada da Identidade Visual Premium</h2>
          <hr />
          <Link
            href="/portfolio/plagiados-jornada-da-identidade-visual-premium-0"
            className="soft-hover"
            >Veja o Case <Image src={Seta}
          /></Link>
        </div>
      </div>

      <div className="case id todos">
        <div
          className="case-ative">
          <Image
              src={Case7}
              alt="Picture of the author"
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
              quality={100}
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
          />
        </div>
        <div className="case-hover">
          <span className="categoria">IDENTIDADE VISUAL</span>
          <h2>ICC</h2>
          <hr />
          <Link href="/portfolio/icc-1-0" className="soft-hover"
            >Veja o Case <Image src={Seta}
          /></Link>
        </div>
      </div>

      <div className="case id todos">
        <div
          className="case-ative">
          <Image
              src={Case8}
              alt="Picture of the author"
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
              quality={100}
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
          />
        </div>
        <div className="case-hover">
          <span className="categoria">IDENTIDADE VISUAL</span>
          <h2>Global Center</h2>
          <hr />
          <Link href="/portfolio/global-center" className="soft-hover"
            >Veja o Case <Image src={Seta}
          /></Link>
        </div>
      </div>

      <div className="case id todos">
        <div
          className="case-ative">
          <Image
              src={Case9}
              alt="Picture of the author"
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
              quality={100}
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
          />
        </div>
        <div className="case-hover">
          <span className="categoria">IDENTIDADE VISUAL</span>
          <h2>Investir no Brasil</h2>
          <hr />
          <Link href="/portfolio/investir-no-brasil" className="soft-hover"
            >Veja o Case <Image src={Seta}
          /></Link>
        </div>
      </div>

      <div className="case id todos">
        <div
          className="case-ative">
            <Image
              src={Case10}
              alt="Picture of the author"
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
              quality={100}
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
          />
          </div>
        <div className="case-hover">
          <span className="categoria">IDENTIDADE VISUAL</span>
          <h2>Fina Fibra</h2>
          <hr />
          <Link href="/portfolio/fina-fibra" className="soft-hover"
            >Veja o Case <Image src={Seta}
          /></Link>
        </div>
      </div>

      <div className="case id todos">
        <div
          className="case-ative">
            <Image
              src={Case11}
              alt="Picture of the author"
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
              quality={100}
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
          />
          </div>
        <div className="case-hover">
          <span className="categoria">IDENTIDADE VISUAL</span>
          <h2>Plagiados</h2>
          <hr />
          <Link href="/portfolio/plagiados-1-1-0" className="soft-hover"
            >Veja o Case <Image src={Seta}
          /></Link>
        </div>
      </div>

      <div className="case id todos">
        <div
          className="case-ative">
            <Image
              src={Case12}
              alt="Picture of the author"
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
              quality={100}
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
          />
          </div>
        <div className="case-hover">
          <span className="categoria">IDENTIDADE VISUAL</span>
          <h2>Prenda e peão</h2>
          <hr />
          <Link href="/portfolio/prenda-e-peao" className="soft-hover"
            >Veja o Case <Image src={Seta}
          /></Link>
        </div>
      </div>
      <br />
    </div>
    <br />
    <div className="conteudo-fluid">
      <Link href="/cases">
        <button id="ver-mais-home" className="soft-hover">MAIS PROJETOS</button>
      </Link>

      <div id="carregando">Carregando...</div>
      <div id="acabou">Nada a ser carregado.</div>
    </div>
    <br />
  </section>
  )
}
