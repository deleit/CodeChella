import styles from "./Botao.module.scss";

interface BotaoProps {
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void,
  children: React.ReactNode;
}

export default function Botao({ type, onClick, children }: BotaoProps) {
  return(
    <button className={styles.botao} type={type} onClick={onClick} >
      <span className={styles.texto}>{children}</span>
    </button>
  );
}