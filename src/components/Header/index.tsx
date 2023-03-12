import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Logo from 'assets/LogoBranco.png';
import Menu from 'components/Menu';
import Navbar from 'components/Navbar';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


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
          <button className={styles.menu} aria-label="Menu">
            {
              openMenu
              ? <CloseIcon onClick={handleOpenMenu} fontSize="large" />
              : <MenuIcon onClick={handleOpenMenu} fontSize="large" />
            }
          </button>
          <Navbar />
        </div>
      </header>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  )
}