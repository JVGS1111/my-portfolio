import styles from './styles.module.scss';
import Typed from 'react-typed';

const strings = [
    'React',
    'React Native',
    'Ionic',
    'Redux',
    'Expo',
    'Angular 2+',
    'Typescript',
    'gaming',
    'cats'
]

export function HomeBanner() {
    return (
        <section className={styles.section_banner}>
            <div className={styles.container}>
                <div className={styles.presentation_text}>
                    Hi! I am front-end developer,
                    talk to me about:
                </div>
                <Typed
                    strings={strings}
                    typeSpeed={200}
                    loop
                    className={styles.type_animation}
                />
            </div>
        </section>
    )
}