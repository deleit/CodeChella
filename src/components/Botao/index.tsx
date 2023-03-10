import styles from "./Botao.module.scss";

interface BotaoProps {
  type?: "submit" | "reset" | "button" | undefined;
  children: React.ReactNode;
}

export default function Botao({ type, children }: BotaoProps) {
  return(
    <button className={styles.botao} type={type} >
      <span className={styles.texto}>{children}</span>
    </button>
  );
}