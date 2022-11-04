import styles from './Rodape.module.css';
import { ReactComponent as MarcaRegistrada } from 'assets/marca-registrada.svg';

export default function Rodape() {
    return(
       <footer className={styles.rodape}>
        <MarcaRegistrada />
        HBO
       </footer>
    )
}

