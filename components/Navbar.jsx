import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import {useSelector} from 'react-redux';
import  Link  from "next/Link";

const Navbar = () => {

  const quantity = useSelector((state)=> state.cart.quantity)
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>Inter-Space tel.:#h1785467</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href='/' passHref>
          <li className={styles.listItem}>Homepage</li>
          </Link>
          <Link href='/menu' passHref>
          <li className={styles.listItem}>Menu</li>
          </Link>
          <Image src="/img/logo.png" alt="" width="80" height="69" className={styles.logo} />
          <Link href='/events' passHref>
          <li className={styles.listItem}>Events</li>
          </Link>
          <Link href='/contact' passHref>
          <li className={styles.listItem}>Contact</li>
          </Link>
        </ul>
      </div>
      <Link href='/cart' passHref>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" width="30" height="30" />
          <div className={styles.counter}>{quantity}</div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Navbar;