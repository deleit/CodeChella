import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>A experiência</li>
        <li>Mapa de Setores</li>
        <li>Informações</li>
        <li>Ingresso</li>
      </ul>
    </nav>
  )
}