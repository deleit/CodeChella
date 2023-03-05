import styles from './SecaoExperiencia.module.scss';
import Card from "components/Card";
import Acessibilidade from "assets/Acessibilidade.jpeg";
import Sustentabilidade from "assets/Sustentabilidade.jpeg";
import Atracoes from "assets/Atracoes.jpeg";

export default function SecaoExperiencia() {
  return (
    <section className={styles.experiencia}>
      <Card 
        src={Acessibilidade} 
        alt="Mulher de terno celebrando" 
        titulo="Acessibilidade e Inclusão"
        tipo="experiencia"
      >
        Nosso evento tenta abraçar um público mais amplo em todos os sentidos, 
        de todas as idades, corpos, gostos e pensamentos! Isso está presente no 
        espaço físico, na sinalização, no treinamento da equipe de apoio, na 
        comunicação em libras, braile, visual e tátil. Além disso, dispomos de 
        ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas 
        idosas e crianças!
      </Card>
      <Card 
        src={Sustentabilidade} 
        alt="Garrafas de vidro em uma sacola de pano" 
        titulo="Sustentabilidade"
        tipo="experiencia"
      >
        Queremos estar aqui celebrando daqui a 50, 100 anos! 
        Por isso, levamos o futuro do nosso planeta a sério. 
        Nosso festival é carbono zero, com utilização de copos 
        retornáveis, coleta e destinação adequada de resíduos, 
        e transporte coletivo.
      </Card>
      <Card 
        src={Atracoes} 
        alt="Roda gigante em frente a um céu limpo" 
        titulo="Atrações"
        tipo="experiencia"
      >
        Intervenções artísticas e culturais para todos os gostos! 
        Durante os intervalos dos shows, nossa experiência contará 
        com recreação para crianças, oficina de cerâmica, origami, 
        circo e aquarela! Além disso, nosso espaço contra com 3 praças 
        de alimentação, roda gigante e outros brinquedos!
      </Card>
    </section>
  );
}