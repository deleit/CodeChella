import styles from "./SecaoIngresso.module.scss";
import Botao from "components/Botao";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function SecaoIngresso() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const inputObject = Object.fromEntries(formData);

    sessionStorage.setItem("ingresso", JSON.stringify(inputObject));
    window.location.reload();
  }

  const data = new Date();
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const dia = String(data.getDate()).padStart(2, '0');
  const idadeMinima = `2010-${mes}-${dia}`;

  return (
    <section className={styles.ingresso}>
      <h3>Preencha o formulário a seguir:</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Nome Completo:
          <input type="text" name="nome" id="nome" minLength={8} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" id="email" required/>
        </label>
        <div>
          <label>
            Tipo de ingresso:
            <select name="tipo" id="tipo" required defaultValue="">
              <option value="" disabled hidden>Tipo de ingresso</option>
              <option value="Pista Premium">Pista Premium</option>
              <option value="Pista Comum">Pista Comum</option>
              <option value="Cadeiras térreo">Cadeiras térreo</option>
              <option value="Cadeiras superiores">Cadeiras superiores</option>
              <option value="Rampas">Rampas</option>
            </select>
          </label>
          <label>
            Data de nascimento:
            <input type="date" name="nascimento" id="nascimento" max={idadeMinima} required />
          </label>
        </div>
        <div className={styles.btnContainer}>
          <Botao>
            Avançar!
            <ArrowForwardIcon sx={{ fontSize: '2rem' }} />
          </Botao>
        </div>
      </form>
    </section>
  );
}