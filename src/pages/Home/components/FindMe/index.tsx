import styles from './styles.module.scss';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { CgMail } from 'react-icons/cg';

export function HomeFindMe() {
    return (
        <section className={styles.find_me_section} id='contact'>
            <h2 className='section_title'>Contact</h2>
            <div className={styles.icon_item}>
                <div className={styles.icon_container}>
                    <AiFillTwitterCircle color={'#fff'} size={25} />
                </div>
                <a href="https://twitter.com/JVGS1111">Twitter</a>
            </div>
            <div className={styles.icon_item}>
                <div className={styles.icon_container}>
                    <AiFillGithub color={'#fff'} size={25} />
                </div>
                <a href="https://github.com/JVGS1111">Portifólio</a>
            </div>
            <div className={styles.icon_item}>
                <div className={styles.icon_container}>
                    <AiFillLinkedin color={'#fff'} size={25} />
                </div>
                <a href="https://www.linkedin.com/in/joaoguebrer/">Linkedin</a>
            </div>
            <div className={styles.icon_item}>
                <div className={styles.icon_container}>
                    <CgMail color={'#fff'} size={25} />
                </div>
                <a href="mailto:joaoviniciusgs@gmail.com">joaoviniciusgs@gmail.com</a>
            </div>
        </section>
    )
}