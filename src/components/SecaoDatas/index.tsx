import styles from "./SecaoDatas.module.scss";
import DatasVerao from "assets/DatasVerao.jpg";
import Botao from "components/Botao";
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

export default function SecaoDatas() {
  return (
    <section className={styles.section}>
      <img src={DatasVerao} alt="Público de um festival" className={styles.publico} />
      <div>
        <h3>&lt; 11 e 12 de Março &gt; <br/>Aluródromo de São Paulo</h3>
        <span>
          Hora de programar nossa memória com novas lembranças! 
          Uma nova experiência sobre música, linguagens e, claro, tecnologia! 
          Somos um festival diverso, com vários artistas e referências. 
          Divirta-se!
        </span>
        <Botao>
          Comprar ingresso!
          <LocalActivityIcon sx={{ fontSize: '2rem' }} />
        </Botao>
      </div>
    </section>
  );
}