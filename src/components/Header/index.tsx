import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Logo from 'assets/LogoBranco.png';
import BotaoMenu from 'assets/BotaoMenu.png';
import Menu from 'components/Menu';
import Navbar from 'components/Navbar';

export default function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <header className={styles.header}>
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo do Codechella" height={64} />
          </Link>
          <img src={BotaoMenu} alt="Menu" className={styles.menu} onClick={handleOpenMenu} />
          <Navbar />
        </div>
      </header>
      <Menu openMenu={openMenu} />
    </>
  )
}