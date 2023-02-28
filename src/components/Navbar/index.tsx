import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/experiencia">
            A experiência
          </Link>
        </li>
        <li>
          <Link to="/setores">
            Mapa de Setores
          </Link>
        </li>
        <li>Informações</li>
        <li>Ingresso</li>
      </ul>
    </nav>
  )
}