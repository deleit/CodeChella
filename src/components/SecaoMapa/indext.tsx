import styles from './SecaoMapa.module.scss';
import Mapa from 'assets/Mapa.png';

export default function SecaoMapa() {
  return (
    <section className={styles.mapa}>
      <img src={Mapa} alt="Mapa dos setores" />
      <div>
        <h2>Legenda:</h2>
        <ul>
          <li>
            <div />
            <span>Pista Premium</span>
          </li>
          <li>
            <div />
            <span>Pista Comum</span>
          </li>
          <li>
            <div />
            <span>Cadeiras térreo</span>
          </li>
          <li>
            <div />
            <span>Cadeiras superiores</span>
          </li>
          <li>
            <div />
            <span>Rampas</span>
          </li>
        </ul>
      </div>
    </section>
  );
}