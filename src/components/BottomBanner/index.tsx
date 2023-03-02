import styles from "./BottomBanner.module.scss";
import BotBanner from "assets/BannerBottomVerao.jpeg";

export default function BottomBanner() {
  return (
    <img src={BotBanner} alt="" className={styles.bottom} />
  );
}