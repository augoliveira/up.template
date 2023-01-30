'use client';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <section>
        <ExperienciaItem
          year="Foco no batimento de metas"
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
      </section>
    </Container>
  );
}

export default Experiencias;
