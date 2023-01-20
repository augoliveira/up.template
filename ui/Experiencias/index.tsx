'use client';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <section>
        <ExperienciaItem
          year="Estratégia"
          title="Serviços"
          description="Rebranding
          Pesquisas
          Planejamento de Marketing
          Posicionamento de Mercado"
        />
        <ExperienciaItem
          year="Tecnologia"
          title="Soluções"
          description="Redes Sociais
          Marketing de Conteúdo
          Inbound Marketing
          Mídia de Performance
          Comunicação Dirigida"
        />
        <ExperienciaItem
          year="Produção"
          title="Criação e gerenciamento"
          description="Campanhas
          Promoções Comerciais
          Incentivo
          Eventos
          Live Marketing"
        />
        <ExperienciaItem
          year="digital"
          title="Soluções"
          description="Soluções Digitais
          Branding
          Marketing Digital
          Mídia de Performance
          Websites
          Portais e Plataformas"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
