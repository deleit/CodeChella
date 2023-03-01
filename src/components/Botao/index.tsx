import styles from "./Botao.module.scss";

export default function Botao({ children, icone }: {children: React.ReactNode, icone: string}) {
  return(
    <button className={styles.botao}>
      <span className={styles.texto}>{children}</span>
      <img src={icone} alt="Ícone do botão" />
    </button>
  );
}