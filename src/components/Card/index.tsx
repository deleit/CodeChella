import styles from './Card.module.scss';

export default function Card({src, alt, titulo, tipo, children}: {src: string, alt: string, titulo: string, tipo:string, children: React.ReactNode}) {
  return (
    <div className={`${styles.card} ${tipo === 'experiencia' ? styles.experiencia : ''}`}>
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