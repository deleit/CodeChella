import styles from "./Footer.module.scss";
import LogoPreto from "assets/LogoPreto.png";
import IconeWpp from "assets/IconeWhatsapp.png";
import IconeDiscord from "assets/IconeDiscord.png";
import IconeIg from "assets/IconeInstagram.png";
import IconeTt from "assets/IconeTwitter.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <img className={styles.logo} src={LogoPreto} height={64} alt="Logo CodeChella preto" />
        <div className={styles.social}>
          <span>Acesse nossas redes: </span>
          <ul>
            <li>
              <a href="https://web.whatsapp.com/">
                <img src={IconeWpp} alt="Link para o WhatsApp" />
              </a>
            </li>
            <li>
              <a href="https://discord.com/">
                <img src={IconeDiscord} alt="Link para o Discord" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <img src={IconeIg} alt="Link para o Instagram" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/">
                <img src={IconeTt} alt="Link para o Twitter" />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.info}>
          <span>Desenvolvido por <a href="https://github.com/deleit">deleit.</a> </span>
          <span>Projeto fictício sem fins comerciais.</span>
        </div>
      </div>
    </footer>
  );
}