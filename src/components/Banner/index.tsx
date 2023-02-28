import styles from "./Banner.module.scss";

export default function Banner({src, children}: {src: string, children: React.ReactNode}) {
  return (
    <div className={styles.banner}>
      <img src={src} alt="Banner" />
      <h2>{children}</h2>
    </div>
  )
}