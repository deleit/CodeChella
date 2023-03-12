import { useState } from "react";
import styles from "./BoxPergunta.module.scss";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export default function BoxPergunta({ pergunta, children }: {pergunta: string, children: React.ReactNode}) {
  const [openPergunta, setOpenPergunta] = useState<boolean>(false);

  const handleClick = () => {
    setOpenPergunta(!openPergunta);
  }

  return (
    <div className={styles.box}>
      <button onClick={handleClick}>
        {pergunta}
        {
          openPergunta
          ? <ArrowDropUpIcon />
          : <ArrowDropDownIcon />
        }
      </button>
      <div style={{ 
        visibility: openPergunta ? 'visible' : 'hidden',
        height: openPergunta ? 'auto' : '0',
        marginBottom: openPergunta ? '1rem' : '0'
      }}>
        <p>
          {children}
        </p>
      </div>
    </div>
  );
}