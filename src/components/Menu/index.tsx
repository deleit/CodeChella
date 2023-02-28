import styles from './Menu.module.scss';

export default function Menu({ openMenu }: {openMenu: boolean}) {
  return (
    <div className={styles.menu} style={{ display: openMenu ? 'flex' : 'none' }}>
      <ul>
        <li>
          A experiência
        </li>
        <hr className={styles.separator} />
        <li>
          Mapa de Setores
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
    </div>
  )
}