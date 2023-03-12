import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

export default function Menu({ openMenu, setOpenMenu }: {openMenu: boolean, setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <nav className={styles.menu} style={{ display: openMenu ? 'flex' : 'none' }}>
      <ul>
        <li>
          <Link to="/experiencia" onClick={() => setOpenMenu(false)}>
            A experiência
          </Link>
        </li>
        <hr className={styles.separator} />
        <li>
          <Link to="/setores" onClick={() => setOpenMenu(false)}>
            Mapa de Setores
          </Link>
        </li>
        <hr className={styles.separator} />
        <Link to="/faq" onClick={() => setOpenMenu(false)}>
          Informações
        </Link>
        <hr className={styles.separator} />
        <li>
          <Link to="/ingresso" onClick={() => setOpenMenu(false)}>
            Ingresso
          </Link>
        </li>
      </ul>
    </nav>
  )
}