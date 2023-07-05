import styles from './styles.module.scss';
import { AiFillGithub } from "react-icons/ai";

export function HomeHeader() {
    return (
        <header className={styles.header}>
            <h2 className={styles.title}>{'<GUERBER.DEV/>'}</h2>
            <ul>
                <a href='#about'>About</a>
                <a href='#bio'>Bio</a>
                <a href='#contact'>Contact</a>
                <a href='https://github.com/JVGS1111/my-portfolio'><AiFillGithub /> Source</a>
            </ul>
        </header>
    )
}