/* eslint-disable react/jsx-no-comment-textnodes */
'use client';
import { Container, TextContainer, InfosContainer, Identidade, Design } from './styles';
function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <TextContainer>
        <h2>SOMOS</h2>
        <h1>
          ESPE
          <br />
          CIALI
          <br />
          STA!
        </h1>
        <hr />
        <br />
        <h2>qualidade</h2>
      </TextContainer>
      <div>
        <InfosContainer>
          <Design data-aos="zoom-in">
            <h2>
              Design
              <br />
              Gráfico<span>.</span>
            </h2>
            <div className="servico-hover" id="design-hover">
              <p>
                Folder, flyer, cartão de <br />
                visita, pasta, papel timbrado,
                <br /> outdoor, painel, uniforme, <br />
                crachá, adesivo, revista, livro...
              </p>
            </div>
          </Design>
          <Identidade data-aos="zoom-in">
            <span className="purple">
              <h2>
                Identidade
                <br />
                Visual<span>.</span>
              </h2>
            </span>
            <div>
              <p>
                A identidade da sua empresa <br /> reflete a qualidade do
                <br />
                produto/serviço que você <br />
                oferece? Se a resposta for <br />
                não, nós podemos ajudar você.
              </p>
            </div>
          </Identidade>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
