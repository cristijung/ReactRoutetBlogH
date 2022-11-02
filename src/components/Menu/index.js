//import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

export default function Menu() {
    return(
        <header>
            <nav className={styles.navegacao}>
                <a href='/' className={`
                ${styles.link}
                ${styles.linkSublinhado}
                `}>
                    Início
                </a>
                <a href='/SobreMim' className={styles.navegacao}>
                    Sobre Mim
                </a>
            </nav>
        </header>
    )
}