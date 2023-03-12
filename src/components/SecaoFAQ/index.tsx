import styles from './SecaoFAQ.module.scss';
import BoxPergunta from 'components/BoxPergunta';
import { Link } from 'react-router-dom';

export default function SecaoFAQ() {
  return (
    <section className={styles.faq}>
      <h3>Perguntas Frequentes:</h3>
      <div className={styles.perguntas}>
        <BoxPergunta pergunta="Quais serão as atrações?">
          Teremos dois dias de shows, o primeiro (11/03) 
          com bandas de rock, e o segundo (12/03) com bandas 
          pop. <Link to="/">Confira o line-up em detalhes 
          clicando neste link!</Link>
        </BoxPergunta>
        <BoxPergunta pergunta="Qual é a classificação etária?">
          A partir de 16 anos, todo mundo pode entrar. 
          De 13 a 15 anos, tem que estar acompanhado dos 
          pais ou responsáveis legais. Menores de 10 anos 
          não podem entrar.
        </BoxPergunta>
        <BoxPergunta pergunta="Quais são os setores disponíveis?">
          Pista Premium <br />
          Pista Comum <br />
          Cadeiras térreo <br />
          Cadeiras superiores <br />
          Rampas
        </BoxPergunta>
        <BoxPergunta pergunta="Quais são os itens proibidos?">
          Garrafas, latas, bebidas, utensílios de armazenagem, 
          embalagens rígidas com tampa, capacetes, cadeiras ou 
          bancos, armas de fogo e armas brancas, objetos 
          pontiagudos, cortantes e/ou perfurantes, correntes e 
          cinturões, fogos de artifício, objetos de vidro, 
          substâncias inflamáveis, cigarro eletrônico, corrosivas 
          e ou tóxicas, revistas, jornais, livros e copo térmico 
          ou similares.
        </BoxPergunta>
        <BoxPergunta pergunta="Quem tem direito a meia-entrada?">
          De acordo com a Lei Federal, têm direito ao benefício 
          da meia-entrada aqueles que preencherem os requisitos 
          e apresentarem os documentos comprobatórios.
        </BoxPergunta>
      </div>
    </section>
  );
}