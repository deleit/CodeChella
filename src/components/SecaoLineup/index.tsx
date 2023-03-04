import styles from "./SecaoLineup.module.scss";
import TituloDatas from "components/TItuloDatas";
import ListaAtracoes from "components/ListaAtracoes";

export default function SecaoLineup() {
  const sabado = {
    primeira: ["System of a DOM"],
    segunda: [
      ["Python Maiden", "Apollo Client 2001"], 
      ["Bon Java", "NickCallback"]
    ],
    terceira: [
      ["Linkin Promises", "Fullstack Fighters"],
      ["Papa React", "Angular in Chains"]
    ],
    quarta: [
      ["Agnostic Front-end", "SlipkNode"],
      ["Pink Flutter", "Kiss"]
    ]
  };

  const domingo = {
    primeira: ["Lana del Ploy"],
    segunda: [
      ["Dua Lib", "The Backnd", "CSS Styles"],
      ["ArrayAna Grande", "DJ Query"]
    ],
    terceira: [
      ["Miley Cypress", "The Bootstrap Boys"],
      ["Json Derulo", "CloudPlay", "Dev Lovato"]
    ],
    quarta: [
      ["Kylie MiLOG", "Jenkins Brothers", "Rubycat Dolls"]
    ]
  };

  return (
    <section className={styles.section}>
      <h2>/Line-Up/</h2>
      <TituloDatas>
          SÁBADO &lt;11/03&gt;
      </TituloDatas>
      <ListaAtracoes atracoes={sabado} />
      <TituloDatas>
          DOMINGO &lt;12/03&gt;
      </TituloDatas>
      <ListaAtracoes atracoes={domingo} />
    </section>
  );
}