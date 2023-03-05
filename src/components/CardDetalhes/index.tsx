import styles from "./CardDetalhes.module.scss";

export default function CardDetalhes({src, alt, titulo, children}: {src: string, alt: string, titulo: string, children: React.ReactNode}) {
  return (
    <div className={styles.cardDetalhes}>
      <img src={src} alt={alt} />
      <div>
        <h2>{titulo}</h2>
        <p>
          {children}
        </p>
      </div>
    </div>
  );
}