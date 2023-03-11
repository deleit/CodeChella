import styles from "./SecaoIngressoComprado.module.scss";
import LogoPreto from "assets/LogoPreto.png";
import IconeBranco from "assets/IconeBranco.png";
import QRCode from "assets/QRCode.png";
import IIngresso from "interfaces/IIngresso";

export default function IngressoComprado({ ingresso }: { ingresso: IIngresso }) {
  return (
    <section className={styles.ingressoComprado}>
      <h3>
        Uhul, agora sim! <br />
        Seu ingresso está aqui, apresente
        na entrada do evento e divirta-se!
      </h3>
      <div className={styles.ingresso}>
        <div className={styles.cabecalho}>
          <img src={LogoPreto} alt="Logo CodeChella preto" height={32} />
          <img src={IconeBranco} alt="Ícone CodeChella branco" height={32} />
        </div>
        <div className={styles.corpo}>
          <img className={styles.qr} src={QRCode} alt="QR Code do ingresso" />
          <div className={styles.dados}>
            <h4>{ingresso.nome}</h4>
            <div>
              <p>Ingresso cortesia</p>
              <p>Setor: {ingresso.tipo}</p>
              <p>Data: 11/03</p>
              <p>Local: São Paulo - SP</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}