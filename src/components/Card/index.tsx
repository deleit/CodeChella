import styles from './Card.module.scss';

export default function Card({src, alt, titulo, children}: {src: string, alt: string, titulo: string, children: React.ReactNode}) {
  return (
    <div className={styles.card}>
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