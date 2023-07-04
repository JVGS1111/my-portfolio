import styles from './styles.module.scss';

export function HomeBio() {

    return (
        <section className={styles.bio_section}>
            <h2 className='section_title'>Bio</h2>
            <div className={styles.bio_entry}>
                <div className={styles.bio_date}>1999</div>
                <div className={styles.bio_text}> Born in Rio Negro, {'Brazil'}</div>
            </div>
            <div className={styles.bio_entry}>
                <div className={styles.bio_date}>2021</div>
                <div className={styles.bio_text}>Completed a graduation in Systems Analysis and Development (UNINTER)</div>
            </div>
            <div className={styles.bio_entry}>
                <div className={styles.bio_date}>2021 to present</div>
                <div className={styles.bio_text}>Working as front-end developer at Wiid</div>
            </div>
        </section>
    )
}