import { useState } from 'react';
import styles from './Header.module.scss';
import Logo from 'assets/LogoBranco.png';
import BotaoMenu from 'assets/BotaoMenu.png';
import Menu from 'components/Menu';

export default function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <header className={styles.header}>
        <img src={Logo} alt="Logo do Codechella" height={64} />
        <img src={BotaoMenu} alt="Menu" onClick={handleOpenMenu} />
      </header>
      <Menu openMenu={openMenu} />
    </>
  )
}