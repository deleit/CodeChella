import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

export default function Menu({ openMenu }: {openMenu: boolean}) {
  return (
    <nav className={styles.menu} style={{ display: openMenu ? 'flex' : 'none' }}>
      <ul>
        <li>
          <Link to="/experiencia">
            A experiência
          </Link>
        </li>
        <hr className={styles.separator} />
        <li>
          <Link to="/setores">
            Mapa de Setores
          </Link>
        </li>
        <hr className={styles.separator} />
        <li>
          Informações
        </li>
        <hr className={styles.separator} />
        <li>
          Ingresso
        </li>
      </ul>
    </nav>
  )
}