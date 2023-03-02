import styles from "./TituloDatas.module.scss";

export default function TituloDatas({children}: {children: React.ReactNode}) {
  return (
    <div className={styles.titulo}>
      <div className={styles.separator} />
      <h3>
        {children}
      </h3>
      <div className={styles.separator} />
    </div>
  );
}