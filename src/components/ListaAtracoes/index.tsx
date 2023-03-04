import { IAtracao } from "interfaces/IAtracao";
import styles from "./ListaAtracoes.module.scss";

export default function ListaAtracoes({atracoes}: {atracoes: IAtracao}) {
  return (
    <ol className={styles.lista}>
      <li>
        {atracoes.primeira.map(atracao => (
          <div key={atracao}>
            <span>{atracao}</span>
          </div>
        ))}
      </li>
      <li>
        {atracoes.segunda.map((atracoes, index) => (
          <div key={atracoes[index]}>
            {atracoes.map(atracao => (
              <span key={atracao}>{atracao}</span>
            ))}
          </div>
        ))}
      </li>
      <li>
        {atracoes.terceira.map((atracoes, index) => (
          <div key={atracoes[index]}>
            {atracoes.map(atracao => (
              <span key={atracao}>{atracao}</span>
            ))}
          </div>
        ))}
      </li>
      <li>
        {atracoes.quarta.map((atracoes, index) => (
          <div key={atracoes[index]}>
            {atracoes.map(atracao => (
              <span key={atracao}>{atracao}</span>
            ))}
          </div>
        ))}
      </li>
    </ol>
  );
}