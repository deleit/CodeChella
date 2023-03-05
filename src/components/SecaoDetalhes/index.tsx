import styles from "./SecaoDetalhes.module.scss";
import CardDetalhes from "components/CardDetalhes";
import Pista from "assets/Pista.jpeg";
import PistaPremium from "assets/PistaPremium.jpeg";
import Cadeiras from "assets/Cadeiras.jpeg";

export default function SecaoDetalhes() {
  return(
    <section className={styles.detalhes}>
      <h3>Mais detalhes sobre os setores:</h3>
      <div className={styles.cards}>
        <CardDetalhes
          src={Pista}
          alt="Mulher em um festival com bambolê"
          titulo="Pista"
        >
          Pista convencional, atendida pelos bares e banheiros 
          das laterais do estádio. Espaço amplo, com local para 
          sentar e descansar. Separada da pista premium por uma grade.
        </CardDetalhes>
        <CardDetalhes
          src={PistaPremium}
          alt="Pessoas em uma plateia dividida vendo um show"
          titulo="Pista Premium"
        >
          Pista mais próxima do palco, com acesso muito próximo 
          a banheiros e bares num raio de 100m. Todas as pessoas 
          idosas e/ou com deficiência têm direito a acesso gratuito a essa área.
        </CardDetalhes>
        <CardDetalhes
          src={Cadeiras}
          alt="Cadeiras dobradas de uma arquibancada"
          titulo="Cadeiras"
        >
          Opção de cadeiras térreas ou elevadas. Acesso próximo 
          a banheiros e bares, visão um pouco elevada em relação às pistas.
        </CardDetalhes>
      </div>
    </section>
  );
}