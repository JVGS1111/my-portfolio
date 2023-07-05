import { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
///@ts-ignore
import Typed from 'typed.js';

const strings = [
    'React',
    'React Native',
    'Ionic',
    'Redux',
    'Expo',
    'Angular 2+',
    'Typescript',
    'sass',
    'Taiwind',
    'Material UI',
    'gaming',
    'cats'
]

export function HomeBanner() {

    const el = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: strings, // Strings to display
            // Speed settings, try diffrent values untill you get good results
            typeSpeed: 200,
            backSpeed: 100,
            backDelay: 1000,
            startDelay: 1000,
            loop: true,
            cursorBlinking: true

        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className={styles.section_banner}>
            <div className={styles.container}>
                <div className={styles.presentation_text}>
                    Hi! I am front-end developer,
                    talk to me about:
                </div>
                <div className={styles.animation_contianer}>
                    <span className={styles.type_animation} ref={el} />
                </div>
            </div>
        </section>
    )
}