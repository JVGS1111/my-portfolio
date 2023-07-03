import styles from './styles.module.scss';

export function HomeBio() {
    return (
        <section className={styles.section_banner}>
            <div className={styles.box1}>
                <div className={styles.text}>
                    <h1>João V. Guerber</h1>
                    <h3>Software developer {'(Developer / Gamer / Fitness)'}</h3>
                </div>
                <div className={styles.img_wrapper}>
                    <div className={styles.bg_img}></div>
                </div>
            </div>
            <div className={styles.box2}>
                <h2 className={styles.section_title}>About</h2>
                <p>João, a talented 24-year-old Brazilian front-end and mobile programmer, is passionate about developing intuitive and responsive interfaces. In addition to his programming skills, he is also an avid gamer and takes care of his physical health and well-being by maintaining a fitness routine. With determination and dedication, João constantly seeks challenges and opportunities to improve his skills and achieve success in his career.</p>
            </div>
        </section>
    )
}