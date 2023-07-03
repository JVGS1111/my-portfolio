import styles from './styles.module.scss';

export function HomeHeader() {
    return (
        <header className={styles.header}>
            <h2 className={styles.title}>{'<GUERBER.DEV/>'}</h2>
            <ul>
                <li>Jorney</li>
                <li>Bio</li>
                <li>Contact</li>
                <li>Source</li>
            </ul>
        </header>
    )
}