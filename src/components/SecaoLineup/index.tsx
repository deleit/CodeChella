import styles from "./SecaoLineup.module.scss";
import TituloDatas from "components/TItuloDatas";

export default function SecaoLineup() {
  return (
    <section className={styles.section}>
      <h2>/Line-Up/</h2>
      <TituloDatas>
          SÁBADO &lt;11/03&gt;
      </TituloDatas>
      <TituloDatas>
          DOMINGO &lt;12/03&gt;
      </TituloDatas>
    </section>
  );
}